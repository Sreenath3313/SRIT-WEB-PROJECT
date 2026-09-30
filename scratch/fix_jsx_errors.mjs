import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

let modifiedCount = 0;

walk('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src', (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix the broken self-closing tags
        // It turned `<img src="..." />` into `<img src="..." / loading="lazy">`
        // We need to change `/ loading="lazy">` to `loading="lazy" />`
        const newContent = content.replace(/\/\s*loading="lazy">/g, 'loading="lazy" />');
        
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent);
            console.log('Fixed JSX syntax in', filePath);
            modifiedCount++;
        }
    }
});

console.log('Total files fixed:', modifiedCount);
