import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;
        
        if (content.includes('h-[600px] sm:h-[800px]')) {
            content = content.replace(/h-\[600px\] sm:h-\[800px\]/g, 'h-[800px] sm:h-[1200px]');
            changed = true;
        }
        if (content.includes('h-[650px] sm:h-[850px]')) {
             content = content.replace(/h-\[650px\] sm:h-\[850px\]/g, 'h-[800px] sm:h-[1200px]');
             changed = true;
        }

        if (changed) {
            fs.writeFileSync(filePath, content);
            console.log('Fixed heights in', filePath);
        }
    }
});
