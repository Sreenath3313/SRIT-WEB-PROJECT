const fs = require('fs');
const txt = fs.readFileSync('eee_html.html', 'utf8');
const links = txt.match(/https?:\/\/[^\s\\"']+/g) || [];
console.log([...new Set(links)].join('\n'));
