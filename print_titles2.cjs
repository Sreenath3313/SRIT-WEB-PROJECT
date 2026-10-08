const fs = require('fs');
const html = fs.readFileSync('civil_page.html', 'utf8');
const lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('elementor-accordion-title')) {
        console.log(lines[i].trim());
    }
}
