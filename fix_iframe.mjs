import fs from 'fs';

const filePath = '/Users/mounikagujjala/Desktop/SDC1-main/src/data/departments.ts';
let data = fs.readFileSync(filePath, 'utf8');

const targetBlock = `{
                title: 'News Letters',
                content: '',
                isSpreadsheet: true,
                availableYears: ['2026', '2025', '2024', '2023', '2022', '2021'],
                sheetUrls: {
                    '2026': 'https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/gviz/tq?tqx=out:csv&gid=1415094964',
                    '2025': 'https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/gviz/tq?tqx=out:csv&gid=1773705087',
                    '2024': 'https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/gviz/tq?tqx=out:csv&gid=52540904',
                    '2023': 'https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/gviz/tq?tqx=out:csv&gid=1881289829',
                    '2022': 'https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/gviz/tq?tqx=out:csv&gid=1404606240',
                    '2021': 'https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/gviz/tq?tqx=out:csv&gid=1664698793',
                }
            }`;

const iframeReplacement = `{
                title: 'News Letters',
                content: \`<iframe src="https://docs.google.com/spreadsheets/d/1gkjoLVHAgpkm0OEc1d34YPUxM7qy-lML/pubhtml?widget=true&amp;headers=false" width="100%" height="500" style="border: none; overflow: hidden;"></iframe>\`
            }`;

data = data.split(targetBlock).join(iframeReplacement);

fs.writeFileSync(filePath, data, 'utf8');
console.log('Modified departments.ts successfully.');
