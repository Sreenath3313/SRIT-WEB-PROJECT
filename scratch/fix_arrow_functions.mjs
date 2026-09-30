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
        
        // Fix the arrow functions broken by lazy loading regex
        let newContent = content.replace(/=\s*loading="lazy">\s*\{/g, '=> {');
        
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent);
            console.log('Fixed arrow function in', filePath);
            modifiedCount++;
        }
    }
});
console.log('Total files fixed:', modifiedCount);
