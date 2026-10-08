const fs = require('fs');
const html = fs.readFileSync('civil_raw.html', 'utf-8');
const regex = /elementor-tab-title[^>]*>.*?<a[^>]*>(?:.*?)ICI(?:.*?)<\/a>.*?<div[^>]*class="elementor-tab-content[^>]*>(.*?)<\/div>/is;
const matches = html.match(regex);
if (matches) {
    console.log("MATCH:", matches[1]);
} else {
    // try to find any iframe around the word ICI
    console.log("NOT FOUND exact match.");
    const allIframes = html.match(/<iframe[^>]*>/gi) || [];
    console.log("Total iframes:", allIframes.length);
    const iciIdx = html.indexOf('ICI');
    if (iciIdx !== -1) {
        console.log("ICI found at", iciIdx);
        console.log("Context:", html.substring(Math.max(0, iciIdx-200), iciIdx+500));
    }
}
