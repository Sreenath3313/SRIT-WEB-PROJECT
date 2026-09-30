import { execSync } from 'child_process';
import fs from 'fs';

const oldContent = execSync('git show HEAD~1:src/pages/DepartmentPage.tsx').toString('utf8');
const startIndex = oldContent.indexOf('{/* LEFT SIDEBAR — CSE Reference Match */}');
const endIndex = oldContent.indexOf('{/* MAIN CONTENT */}');

if (startIndex !== -1 && endIndex !== -1) {
    const sidebarCode = oldContent.substring(startIndex, endIndex);
    fs.writeFileSync('c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/scratch/sidebar.tsx', sidebarCode, 'utf8');
    console.log('Sidebar code extracted');
} else {
    console.log('Could not find sidebar markers');
}
