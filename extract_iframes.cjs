const fs = require('fs');
const html = fs.readFileSync('civil_page.html', 'utf8');
const regex = /(.{0,150})<iframe[^>]+src=\"(https:\/\/docs\.google\.com\/spreadsheets\/[^\"]+)\"/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log('CONTEXT:', match[1].replace(/\n/g, ' '));
    console.log('URL:', match[2]);
    console.log('---');
}
