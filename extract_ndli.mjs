import fs from 'fs';

const content = fs.readFileSync('src/pages/NdliClubPage.tsx', 'utf-8');

const endMatch = content.indexOf('const NdliClubPage = ');
const startMatch = content.indexOf('// Objectives grid list');

if (endMatch !== -1 && startMatch !== -1) {
    const dataContent = content.substring(startMatch, endMatch);
    const imports = `import React from 'react';\nimport { TrendingUp, BookOpen, Layers, Lightbulb, Briefcase, Users } from 'lucide-react';\n\n`;
    fs.writeFileSync('src/data/ndli.tsx', imports + dataContent);
    
    const newContent = content.substring(0, startMatch) + 
                       `import { objectives, executiveMembers, type ObjectiveItem, type ProfileMember } from '../data/ndli';\n\n` + 
                       content.substring(endMatch);
    fs.writeFileSync('src/pages/NdliClubPage.tsx', newContent);
    console.log('Successfully extracted NDLI data.');
} else {
    console.log('Could not find data boundaries.');
}
