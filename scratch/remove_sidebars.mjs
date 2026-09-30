import fs from 'fs';
import path from 'path';

function removeSidebars(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            removeSidebars(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // 1. Remove <aside>...</aside> and <motion.aside>...</motion.aside>
            // We use a regex that matches from <aside to </aside> or <motion.aside to </motion.aside>
            // Note: This assumes aside tags are not nested, which is standard.
            const asideRegex = /<aside[\s\S]*?<\/aside>/g;
            const motionAsideRegex = /<motion\.aside[\s\S]*?<\/motion\.aside>/g;

            if (asideRegex.test(content)) {
                content = content.replace(asideRegex, '');
                modified = true;
            }
            if (motionAsideRegex.test(content)) {
                content = content.replace(motionAsideRegex, '');
                modified = true;
            }

            // 2. Fix the grid layouts
            // Replace lg:grid-cols-[1fr_220px], lg:grid-cols-[1fr_240px], etc. with lg:grid-cols-1
            const gridRegex = /lg:grid-cols-\[1fr_\d+px\]/g;
            if (gridRegex.test(content)) {
                content = content.replace(gridRegex, 'lg:grid-cols-1');
                modified = true;
            }
            
            // Fix grids with lg:grid-cols-[1fr_280px]
            const gridRegex2 = /lg:grid-cols-\[1fr_[a-zA-Z0-9]+\]/g;
            if (gridRegex2.test(content)) {
                content = content.replace(gridRegex2, 'lg:grid-cols-1');
                modified = true;
            }

            // If CommunityServicesPage or others use lg:col-span-9 and lg:col-span-3
            // Wait, we need to be careful with col-span-9 as it might be used elsewhere.
            // Let's specifically target the main content wrapper.
            // "lg:col-span-9" -> "lg:col-span-12" or "w-full"
            if (fullPath.includes('CommunityServicesPage.tsx') || fullPath.includes('CampusLifeLayout.tsx')) {
                 if (content.includes('lg:col-span-9')) {
                     content = content.replace(/lg:col-span-9/g, 'lg:col-span-12');
                     modified = true;
                 }
                 if (content.includes('lg:col-span-8')) {
                     content = content.replace(/lg:col-span-8/g, 'lg:col-span-12');
                     modified = true;
                 }
            }

            // Also in DepartmentPage.tsx, it might have grid-cols-12
            if (fullPath.includes('DepartmentPage.tsx')) {
                 // The DepartmentPage uses lg:grid-cols-4 and lg:col-span-3 maybe?
                 if (content.includes('lg:col-span-3') && content.includes('lg:col-span-9')) {
                     content = content.replace(/lg:col-span-9/g, 'lg:col-span-12');
                     modified = true;
                 }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Removed sidebar from:', fullPath);
            }
        }
    }
}

removeSidebars('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src/pages');
console.log('Sidebar removal complete.');
