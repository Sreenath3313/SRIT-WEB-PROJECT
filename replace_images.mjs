import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

const newImages = [
    '/Campus.JPG',
    '/College 1.jpg',
    '/College 2.JPG',
    '/College 3.JPG',
    '/College.JPG',
    '/ComputerLab.JPG',
    '/Library 1.JPG',
    '/Library.JPG',
    '/BasketBall.JPG',
    '/Transport.jpg',
    '/culturalevent.jpg',
    '/labs.jpg',
    '/sportfacilites.jpg',
    '/sports.jpg',
    '/srit.jpg',
    '/srit1.jpg'
];

const peopleImages = [
    '/Hemanth.png',
    '/venkatesh.png',
    '/vijay bhaskar.png',
    '/csmhod.jpg',
    '/padmavathi.jpg',
    '/principal.jpg',
    '/ranjit.jpg',
    '/sambasir.jpg',
    '/saro1.jpeg',
    '/saro2.jpeg',
    '/saro3.jpeg',
    '/saro4.jpeg'
];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
          arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(srcDir);

let imgIndex = 0;
let peopleIndex = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Regex to match unsplash images
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?[^'"]*/g;

    content = content.replace(regex, (match) => {
        modified = true;
        
        // If the file is alumni or faculty, try to use people images
        if (file.includes('alumni.ts') || file.includes('faculty.ts')) {
             const img = peopleImages[peopleIndex % peopleImages.length];
             peopleIndex++;
             return img;
        }

        const img = newImages[imgIndex % newImages.length];
        imgIndex++;
        return img;
    });

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated images in ${file}`);
    }
});
