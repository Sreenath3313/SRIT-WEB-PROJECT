import fs from 'fs';
import path from 'path';

function fixInnerLayout(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            fixInnerLayout(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // In Community Services, remove max-w-xl and max-w-2xl from structural components
            if (fullPath.includes('CommunityServicesPage.tsx') || fullPath.includes('campus-life')) {
                const replacements = [
                    { from: 'max-w-xl', to: 'w-full' },
                    { from: 'max-w-2xl', to: 'w-full' },
                    { from: 'max-w-3xl', to: 'w-full' },
                    { from: 'max-w-4xl', to: 'w-full' },
                ];
                
                for (const r of replacements) {
                    if (content.includes(r.from)) {
                        // Avoid replacing in class strings where it's part of another word, though max-w- is standard.
                        content = content.replace(new RegExp(r.from, 'g'), r.to);
                        modified = true;
                    }
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed inner constraints in:', fullPath);
            }
        }
    }
}

fixInnerLayout('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src/pages');
console.log('Inner layout fix complete.');
