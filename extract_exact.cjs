const fs = require('fs');
const html = fs.readFileSync('civil_page.html', 'utf8');

const targetTitles = [
    "Student Academic Activities",
    "Students in Academic Events",
    "Publications",
    "Patents",
    "Faculty Certifications",
    "Faculty Development Program's",
    "Innovative Teaching Methodologies"
];

for (const title of targetTitles) {
    const idx = html.indexOf(title);
    if (idx !== -1) {
        const searchArea = html.substring(idx, idx + 3000);
        const iframeMatch = searchArea.match(/<iframe[^>]+(?:src|data-lazy-src)=\"([^\"]*docs\.google\.com[^\"]+)\"/);
        if (iframeMatch) {
            console.log(`Title: ${title}`);
            console.log(`URL: ${iframeMatch[1].replace(/&#038;/g, '&').replace(/&amp;/g, '&')}`);
            console.log('---');
        }
    }
}
