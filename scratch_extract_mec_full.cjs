const fs = require('fs');
const html = fs.readFileSync('mec_raw.html', 'utf-8');

const obeIndex = html.indexOf('Outcome Based Education');
const slice = html.substring(obeIndex, obeIndex + 20000); 

const accordions = [...slice.matchAll(/elementor-tab-title[^>]*>.*?<a[^>]*>(.*?)<\/a>.*?<div[^>]*class="elementor-tab-content[^>]*>(.*?)<\/div>/gis)];

fs.writeFileSync('mec_obe.json', JSON.stringify([{
    title: accordions[0][1].trim(),
    content: accordions[0][2].trim()
}, {
    title: accordions[1][1].trim(),
    content: accordions[1][2].trim()
}], null, 4));

console.log("Written to mec_obe.json");
