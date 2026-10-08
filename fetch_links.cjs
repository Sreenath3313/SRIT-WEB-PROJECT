const fs = require('fs');
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vT8M91xvz8XZaLG2EjFXtdhV7SEIuZMrW7jf1HxrFnTf8_5u4Q7RaqSPtOby46hMQd9jIlWZYrF6V3r/pubhtml')
  .then(res => res.text())
  .then(html => {
    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    let match;
    let results = [];
    while ((match = trRegex.exec(html)) !== null) {
      const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
      let tdMatch;
      let row = [];
      while ((tdMatch = tdRegex.exec(match[1])) !== null) {
        row.push(tdMatch[1]);
      }
      if (row.length > 5) {
        const name = row[1].replace(/<[^>]*>/g, '').trim();
        if (name && name !== 'Name of the Faculty') {
          const aRegex = /href=\"(https?:\/\/[^\"]+)\"/;
          const aMatch = aRegex.exec(row[6] || '');
          const link = aMatch ? aMatch[1] : '';
          results.push({ name, link });
        }
      }
    }
    fs.writeFileSync('eee_links.json', JSON.stringify(results, null, 2));
    console.log('Parsed ' + results.length + ' rows.');
  })
  .catch(console.error);
