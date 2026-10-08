const fs = require('fs');
const html = fs.readFileSync('civil_page.html', 'utf8');

// The titles and iframes seem to be grouped. Let's just match any Elementor accordion title
const regex = /<a[^>]*class=\"[^\"]*elementor-accordion-title[^\"]*\"[^>]*>.*?([^<]+)<\/a>[\s\S]*?<iframe[^>]+(?:src|data-lazy-src)=\"([^\"]*docs\.google\.com[^\"]+)\"/g;

let match;
while ((match = regex.exec(html)) !== null) {
    const title = match[1].trim();
    const url = match[2].replace(/&#038;/g, '&').replace(/&amp;/g, '&');
    console.log(`Title: ${title}\nURL: ${url}\n---`);
}
