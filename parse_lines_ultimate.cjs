const fs = require('fs');
const html = fs.readFileSync('civil_page.html', 'utf8');
const lines = html.split('\n');
let currentTitle = null;
for (let i = 0; i < lines.length; i++) {
    const titleMatch = lines[i].match(/class=\"elementor-accordion-title\"[^>]*>([^<]+)<\/a>/);
    if (titleMatch) {
        currentTitle = titleMatch[1].trim();
    }
    const urlMatch = lines[i].match(/(https:\/\/docs\.google\.com\/spreadsheets\/[^\"]+)/);
    if (urlMatch && currentTitle) {
        console.log(currentTitle + '|||' + urlMatch[1].split('?')[0] + '?widget=true&headers=false');
        currentTitle = null;
    }
}
