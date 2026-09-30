import fs from 'fs';
import path from 'path';

function fixLayout(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            fixLayout(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Change max-w-[1100px] to max-w-[1300px]
            if (content.includes('max-w-[1100px]')) {
                content = content.replace(/max-w-\[1100px\]/g, 'max-w-[1300px]');
                modified = true;
            }

            // Change max-w-[1000px] to max-w-[1300px]
            if (content.includes('max-w-[1000px]')) {
                content = content.replace(/max-w-\[1000px\]/g, 'max-w-[1300px]');
                modified = true;
            }

            // Ensure grid-cols-1 if it was left hanging as empty grid
            if (content.includes('grid gap-8 lg:grid-cols-1')) {
                content = content.replace(/grid gap-8 lg:grid-cols-1/g, 'flex flex-col gap-8 w-full');
                modified = true;
            }
            if (content.includes('grid lg:grid-cols-1 gap-8')) {
                content = content.replace(/grid lg:grid-cols-1 gap-8/g, 'flex flex-col gap-8 w-full');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed layout in:', fullPath);
            }
        }
    }
}

fixLayout('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src/pages');
console.log('Layout fix complete.');
