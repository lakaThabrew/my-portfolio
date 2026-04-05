const fs = require("fs");
const path = require("path");
const Parser = require("rss-parser");

const parser = new Parser();

const mediumUsername = "chulankalakmanathabrew";
const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
const outputPath = path.join(__dirname, "../src/data/blogs.json");

function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function normalizePost(item) {
  return {
    title: item.title || "",
    link: item.link || "",
    pubDate: item.pubDate || "",
    isoDate: item.isoDate || "",
    guid: item.guid || item.id || item.link || "",
    categories: Array.isArray(item.categories) ? item.categories : [],
    creator: item.creator || "",
    contentSnippet: item.contentSnippet || "",
    thumbnail: item.enclosure?.url || "",
  };
}

async function fetchBlogs() {
  console.log(`Fetching Medium blogs for @${mediumUsername}...`);
  console.log(`Feed URL: ${rssUrl}`);

  try {
    const feed = await parser.parseURL(rssUrl);

    if (!feed || !Array.isArray(feed.items)) {
      throw new Error("Feed parsed, but no items array was found.");
    }

    const blogs = feed.items.map(normalizePost);

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
