const fs = require('fs');
const html = fs.readFileSync('mec_raw.html', 'utf-8');

const obeIndex = html.indexOf('Outcome Based Education');
if (obeIndex === -1) {
    console.log("OBE not found");
    process.exit(1);
}

const slice = html.substring(obeIndex, obeIndex + 20000); // 20kb after OBE heading

const accordions = [...slice.matchAll(/elementor-tab-title[^>]*>.*?<a[^>]*>(.*?)<\/a>.*?<div[^>]*class="elementor-tab-content[^>]*>(.*?)<\/div>/gis)];

accordions.forEach((match, i) => {
    console.log(`--- MATCH ${i}: ${match[1].trim()} ---`);
    console.log(match[2].trim().substring(0, 500)); // print first 500 chars of content
});

