import fs from 'fs';
import path from 'path';

function fixAboutUs(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fullPath.endsWith('PrincipalPage.tsx') || fullPath.endsWith('SecretaryPage.tsx') || fullPath.endsWith('ChairpersonPage.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // Widen the image container
            content = content.replace(/lg:w-\[260px\]/g, 'lg:w-[360px] xl:w-[400px]');
            // Improve text spacing
            content = content.replace(/space-y-4 text-neutral-600 leading-relaxed/g, 'space-y-6 text-neutral-600 leading-loose text-[15px] sm:text-base');
            fs.writeFileSync(fullPath, content);
            console.log('Fixed About Us page:', fullPath);
        }
    }
}

fixAboutUs('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src/pages/about');
