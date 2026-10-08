const fs = require('fs');
const html = fs.readFileSync('civil_raw.html', 'utf-8');
const iciIdx = html.indexOf('ICI');
if (iciIdx !== -1) {
    console.log("Context around ICI:");
    console.log(html.substring(Math.max(0, iciIdx-500), Math.min(html.length, iciIdx+1500)));
} else {
    console.log("ICI not found at all.");
}
