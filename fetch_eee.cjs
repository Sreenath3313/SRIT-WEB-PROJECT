const fs = require('fs');
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vT8M91xvz8XZaLG2EjFXtdhV7SEIuZMrW7jf1HxrFnTf8_5u4Q7RaqSPtOby46hMQd9jIlWZYrF6V3r/pubhtml?widget=true&headers=false')
    .then(r => r.text())
    .then(t => { 
        fs.writeFileSync('eee_html.html', t);
        console.log('Saved to eee_html.html');
    })
    .catch(console.error);
