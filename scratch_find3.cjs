const fs = require('fs');
const html = fs.readFileSync('ici_raw.html', 'utf-8');
const iframes = html.match(/<iframe[^>]*>/gi) || [];
if (iframes.length > 0) {
    iframes.forEach(iframe => console.log(iframe));
} else {
    console.log("No iframes found on ICI page.");
}
