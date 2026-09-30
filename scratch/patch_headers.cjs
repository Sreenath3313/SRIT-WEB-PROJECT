const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main';
const admissionsPath = path.join(projectRoot, 'src/pages/admissions');
const placementsPath = path.join(projectRoot, 'src/pages/placements');

const admissionFiles = fs.readdirSync(admissionsPath).filter(f => f.endsWith('Page.tsx'));
const placementFiles = fs.readdirSync(placementsPath).filter(f => f.endsWith('Page.tsx'));

const allFiles = [
  ...admissionFiles.map(f => ({ file: f, category: 'admissions', folder: admissionsPath })),
  ...placementFiles.map(f => ({ file: f, category: 'placements', folder: placementsPath }))
];

const imports = [];
const routes = [];

for (const { file, category, folder } of allFiles) {
  const compName = file.replace('.tsx', '');
  
  // Construct import path
  const importPath = `./pages/${category}/${compName}`;
  imports.push(`import ${compName} from '${importPath}'`);
  
  // Route logic: kebab-case
  let routeName = file
    .replace('Page.tsx', '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
    
  if (routeName === 'about-t-a-p' || routeName === 'about-t-and-p') {
      routeName = 'about-t-and-p'; // Standardize
  }
  
  // Add route if it doesn't already exist (we'll generate all and manually copy/paste if easier, or auto patch App.tsx)
  routes.push(`          <Route path="/${category}/${routeName}" element={<${compName} />} />`);
  
  // Now modify the file for PageHeader
  const filePath = path.join(folder, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Regex to find manual header
  const headerRegex = /\{\/\*\s*Header Banner\s*\*\/\}\s*<header[\s\S]*?<\/header>/g;
  const match = headerRegex.exec(content);
  
  if (match) {
    // Check if PageHeader is imported
    if (!content.includes('import PageHeader')) {
      content = content.replace(
        "import Navbar from '../../components/layout/Navbar'",
        "import Navbar from '../../components/layout/Navbar'\nimport PageHeader from '../../components/common/PageHeader'"
      );
    }
    
    // Extract title from the file (look for const title = '...')
    const titleMatch = content.match(/const\s+title\s*=\s*['"]([^'"]+)['"]/);
    const categoryTitleMatch = content.match(/const\s+categoryTitle\s*=\s*['"]([^'"]+)['"]/);
    
    let titleStr = titleMatch ? titleMatch[1] : '';
    let catTitleStr = categoryTitleMatch ? categoryTitleMatch[1] : '';
    
    // If not found as constants, try to extract from the header block
    if (!titleStr) {
        const h1Match = match[0].match(/<h1[^>]*>([^<]+)<\/h1>/);
        if (h1Match) titleStr = h1Match[1].replace('&amp;', '&').trim();
    }
    
    if (!catTitleStr) {
        if (category === 'admissions') catTitleStr = 'Admissions';
        else if (category === 'placements') catTitleStr = 'Placements';
    }
    
    const newHeader = `<PageHeader title="${titleStr}" categoryTitle="${catTitleStr}" />`;
    
    content = content.replace(headerRegex, newHeader);
    fs.writeFileSync(filePath, content);
  }
}

// Log out the generated imports and routes to inject into App.tsx
console.log('--- IMPORTS ---');
console.log(imports.join('\n'));
console.log('--- ROUTES ---');
console.log(routes.join('\n'));
