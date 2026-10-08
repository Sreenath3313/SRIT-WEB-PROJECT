const fs = require('fs');
const html = fs.readFileSync('ece_raw.html', 'utf-8');

const scIndex = html.indexOf('STUDENT CHAPTERS');
if (scIndex === -1) {
    console.log("Not found");
} else {
    console.log(html.substring(scIndex, scIndex + 3000));
}
