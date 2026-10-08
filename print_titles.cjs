const fs = require('fs');
const html = fs.readFileSync('civil_page.html', 'utf8');
const lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
    const titleMatch = lines[i].match(/class=\"elementor-accordion-title\"[^>]*>([^<]+)<\/a>/);
    if (titleMatch) {
        console.log(titleMatch[1].trim());
    }
}
