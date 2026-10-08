const fs = require('fs');
const html = fs.readFileSync('civil_page.html', 'utf8');

// Match <a id="elementor-tab-title-123" class="elementor-accordion-title" ...>TITLE</a>
const titleRegex = /<a[^>]*class=\"elementor-accordion-title\"[^>]*>(?:<span[^>]*><\/span>\s*<span[^>]*>)?([^<]+)(?:<\/span>)?<\/a>/g;

let match;
while ((match = titleRegex.exec(html)) !== null) {
    const title = match[1].trim();
    // We search for the next iframe after this match
    const searchArea = html.substring(match.index);
    const iframeMatch = searchArea.match(/<iframe[^>]+(?:src|data-lazy-src)=\"([^\"]*docs\.google\.com[^\"]+)\"/);
    
    // We only care about it if the iframe is relatively close, say within 2000 chars
    if (iframeMatch && iframeMatch.index < 2000) {
        console.log(`Title: ${title}`);
        console.log(`URL: ${iframeMatch[1].replace(/&#038;/g, '&').replace(/&amp;/g, '&')}`);
        console.log('---');
    }
}
