const fs = require('fs');
const html = fs.readFileSync('civil_page.html', 'utf8');

const titleRegex = /class=\"elementor-accordion-title\"[^>]*>([^<]+)/g;
let match;
while ((match = titleRegex.exec(html)) !== null) {
    const title = match[1].trim();
    const searchArea = html.substring(match.index, match.index + 2000);
    const iframeMatch = searchArea.match(/<iframe[^>]+(?:src|data-lazy-src)=\"([^\"]*docs\.google\.com[^\"]+)\"/);
    if (iframeMatch) {
        console.log('Title:', title);
        console.log('URL:', iframeMatch[1].replace(/&#038;/g, '&').replace(/&amp;/g, '&'));
        console.log('---');
    }
}
