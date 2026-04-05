const fs = require("fs");
const path = require("path");

const mediumUsername = "chulankalakmanathabrew";
const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
const outputPath = path.join(__dirname, "../src/data/blogs.json");

function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function cleanHtml(html = "") {
  return html
    .replace(/<img[^>]*>/gi, "")
    .replace(/<figure[\s\S]*?<\/figure>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractThumbnail(item) {
  if (item.thumbnail) return item.thumbnail;

  const content = item.content || "";
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : "";
}

function normalizeItem(item) {
  return {
    title: item.title || "",
    link: item.link || "",
    pubDate: item.pubDate || "",
    author: item.author || mediumUsername,
    guid: item.guid || item.link || "",
    thumbnail: extractThumbnail(item),
    categories: Array.isArray(item.categories) ? item.categories : [],
    description: cleanHtml(item.description || item.content || ""),
  };
}

async function fetchBlogs() {
  console.log(`Fetching Medium blogs for @${mediumUsername}...`);
  console.log(`RSS URL: ${rssUrl}`);

  try {
    const res = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (data.status !== "ok") {
      throw new Error(`rss2json returned non-ok status: ${JSON.stringify(data)}`);
    }

    if (!Array.isArray(data.items)) {
      throw new Error("Invalid response: items is not an array");
    }

    const blogs = data.items.map(normalizeItem);

    ensureDirExists(outputPath);
    fs.writeFileSync(outputPath, JSON.stringify(blogs, null, 2), "utf8");

    console.log(`Successfully stored ${blogs.length} blogs in ${outputPath}`);
  } catch (error) {
    console.error("Failed to fetch Medium blogs:");
    console.error(error);
    process.exit(1);
  }
}

fetchBlogs();
