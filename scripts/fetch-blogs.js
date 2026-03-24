const fs = require('fs');
const path = require('path');

const mediumUsername = "chulankalakmanathabrew"; 
const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

async function fetchBlogs() {
  console.log('Fetching blogs from Medium for @', mediumUsername, '...');
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    
    if (data.status === 'ok') {
      const outputPath = path.join(__dirname, '../src/data/blogs.json');
      
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(outputPath, JSON.stringify(data.items, null, 2));
      console.log('Successfully stored', data.items.length, 'blogs in src/data/blogs.json');
    } else {
      console.error('Failed to fetch blogs. Response status not OK:', data);
    }
  } catch (err) {
    console.error('Error fetching blogs:', err);
  }
}

fetchBlogs();
