const fs = require('fs');
let tsContent = fs.readFileSync('src/features/departments/mec/data/department.ts', 'utf-8');

const obeJson = JSON.parse(fs.readFileSync('mec_obe.json', 'utf-8'));

const outcomeGroups = `
    "outcomeGroups": [
        {
            "title": "(PEOs)",
            "content": ${JSON.stringify(obeJson[0].content)}
        },
        {
            "title": "PO's & PSO's",
            "content": ${JSON.stringify(obeJson[1].content)}
        },
        {
            "title": "Outcome Based Education Manual",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vQPtEFsOOnkth6Ny1VengGrV2V9NxmCvN6KhZT9AiVmMV0l-S-I47ve42MeuACoXg/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"600\" style=\"border: none; width: 100%; height: 600px; zoom: 1.25; overflow: hidden;\"></iframe>"
        },
        {
            "title": "Attainment of Course Outcomes",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9u_tQ30-IcRjkAlmTagAAmedBGhPtvxAVUJ8tow8bHN_hf72_BVJG4iaQxeDF1A/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"600\" style=\"border: none; width: 100%; height: 600px; zoom: 1.25; overflow: hidden;\"></iframe>"
        },
        {
            "title": "PO and PSO Attainment",
            "content": "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTSmO78ThOYcOOSFxq3F0BjjZasLCHfgRwDb-DxMoAIhddApkvVA3K95W2dX4Fjxg/pubhtml?widget=true&headers=false\" width=\"100%\" height=\"600\" style=\"border: none; width: 100%; height: 600px; zoom: 1.25; overflow: hidden;\"></iframe>"
        }
    ],
`;

tsContent = tsContent.replace(/components: {/, outcomeGroups + '    components: {');
fs.writeFileSync('src/features/departments/mec/data/department.ts', tsContent);
console.log("Patched department.ts");
