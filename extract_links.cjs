const fs = require('fs');
const html = fs.readFileSync('C:/Users/Sreenath/.gemini/antigravity-ide/brain/6c152058-1a04-405d-a396-1f619cbaec03/.system_generated/steps/1013/content.md', 'utf8');
const httpRegex = /https?:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/[^\s\"'<]*)?/g;
const links = html.match(httpRegex);
console.log([...new Set(links)]);
