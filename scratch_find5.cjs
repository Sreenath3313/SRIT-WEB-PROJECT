const fs = require('fs');
const html = fs.readFileSync('civil_raw.html', 'utf-8');
const iframes = html.match(/<iframe[^>]*src="[^"]+"[^>]*>/gi) || [];
console.log(`Found ${iframes.length} iframes. Printing all URLs:`);
iframes.forEach(iframe => {
    const src = iframe.match(/src="([^"]+)"/i)[1];
    console.log(src);
});
