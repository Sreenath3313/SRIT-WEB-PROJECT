const fs = require('fs');
const html = fs.readFileSync('civil_raw.html', 'utf-8');
const iframes = html.match(/<iframe[^>]*src="[^"]+"[^>]*>/gi) || [];
iframes.forEach(iframe => {
    const idx = html.indexOf(iframe);
    const before = html.substring(Math.max(0, idx - 200), idx);
    const titleMatch = before.match(/elementor-tab-title[^>]*>.*?<a[^>]*>(.*?)<\/a>/is);
    if (titleMatch) {
        // Just print if it mentions ICI
        if (titleMatch[1].toUpperCase().includes('ICI')) {
            console.log("FOUND ICI:", titleMatch[1]);
        }
    }
});
console.log("Done checking titles.");
