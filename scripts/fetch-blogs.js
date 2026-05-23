const fs = require("fs");
const path = require("path");
const Parser = require("rss-parser");

const parser = new Parser();

const mediumUsername = "chulankalakmanathabrew";

const rssUrl = `https://medium.com/feed/@${mediumUsername}`;

const outputPath = path.join(
  __dirname,
  "../src/data/blogs.json"
);

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

function extractThumbnail(content = "") {
  const match = content.match(
    /<img[^>]+src=["']([^"']+)["']/i
  );

  return match ? match[1] : "";
}

async function fetchBlogs() {
  try {
    console.log(`Fetching latest Medium blogs...`);

    const feed = await parser.parseURL(rssUrl);

    const blogs = feed.items.map((item) => ({
      title: item.title || "",
      link: item.link || "",
      pubDate: item.pubDate || "",
      author: item.creator || mediumUsername,
      guid: item.guid || item.link || "",
      thumbnail: extractThumbnail(item['content:encoded'] || ""),
      categories: item.categories || [],
      description: cleanHtml(
        item['content:encodedSnippet'] || item['content:encoded'] || ""
      ),
    }));

    ensureDirExists(outputPath);

    const newContent = JSON.stringify(blogs, null, 2);

    let oldContent = "";

    if (fs.existsSync(outputPath)) {
      oldContent = fs.readFileSync(outputPath, "utf8");
    }

    if (oldContent === newContent) {
      console.log("No new blogs found.");
      return;
    }

    fs.writeFileSync(outputPath, newContent);

    console.log(
      `Updated blogs.json with ${blogs.length} posts`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

fetchBlogs();