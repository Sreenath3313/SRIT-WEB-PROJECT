const fs = require('fs');
const html = fs.readFileSync('mec_raw.html', 'utf-8');

const peoMatch = html.match(/<div[^>]*class="elementor-tab-title[^>]*>.*?<a[^>]*>.*?\(PEOs\).*?<\/a>.*?<div[^>]*class="elementor-tab-content[^>]*>(.*?)<\/div>/is);
if (peoMatch) console.log("--- PEOs ---\n", peoMatch[1].trim());

const poMatch = html.match(/<div[^>]*class="elementor-tab-title[^>]*>.*?<a[^>]*>.*?PO&#8217;s.*?<\/a>.*?<div[^>]*class="elementor-tab-content[^>]*>(.*?)<\/div>/is);
if (poMatch) console.log("--- POs ---\n", poMatch[1].trim());
