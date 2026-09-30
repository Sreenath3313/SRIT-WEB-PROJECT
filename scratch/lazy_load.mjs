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
        
        // Use regex to find <img tags that do not contain the loading attribute
        // and add loading="lazy" to them. This ensures all images have a loading state.
        let changed = false;
        
        const newContent = content.replace(/<img(?![^>]*loading=)([^>]*)>/g, '<img$1 loading="lazy">');
        
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent);
            console.log('Added lazy loading to', filePath);
            modifiedCount++;
        }
    }
});

console.log('Total files modified:', modifiedCount);
