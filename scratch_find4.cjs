const fs = require('fs');
const html = fs.readFileSync('civil_raw.html', 'utf-8');
const titles = html.match(/elementor-tab-title[^>]*>.*?<a[^>]*>(.*?)<\/a>/gi);
console.log(titles ? titles.slice(-10) : 'no titles');
