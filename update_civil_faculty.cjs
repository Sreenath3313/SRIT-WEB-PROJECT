const fs = require('fs');
let content = fs.readFileSync('src/features/departments/civil/data/department.ts', 'utf8');

// The faculty array starts at `"faculty": [`
const facultyStartIndex = content.indexOf('"faculty": [');

if (facultyStartIndex !== -1) {
    // Let's just do a string replacement to swap the first two faculty members
    const part1 = `        {
            "name": "Dr. T. Chinna Venkata Reddy",
            "designation": "Professor",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "08-08-2022",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/srit.ac.in/drtcvenkatareddy/home"
        },
        {
            "name": "Dr. U. Raghu Babu",
            "designation": "Professor",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "21-01-2021",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/view/raghubabuuppara/home"
        }`;
        
    const part2 = `        {
            "name": "Dr. U. Raghu Babu",
            "designation": "Professor & Head",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "21-01-2021",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/view/raghubabuuppara/home"
        },
        {
            "name": "Dr. T. Chinna Venkata Reddy",
            "designation": "Professor",
            "qualification": "M. Tech. Ph. D.",
            "joiningDate": "08-08-2022",
            "association": "Regular",
            "profileUrl": "https://sites.google.com/srit.ac.in/drtcvenkatareddy/home"
        }`;
        
    // Sometimes there are \r\n differences, so let's normalize
    const normalize = str => str.replace(/\s+/g, '');
    
    // Find the actual string in the file that matches the normalized part1
    // We can just use a regex
    content = content.replace(
        /\{\s*"name":\s*"Dr\.\s*T\.\s*Chinna\s*Venkata\s*Reddy"[\s\S]*?"Dr\.\s*U\.\s*Raghu\s*Babu"[\s\S]*?\},/m,
        part2 + ','
    );

    fs.writeFileSync('src/features/departments/civil/data/department.ts', content, 'utf8');
    console.log('Reordered faculty array');
} else {
    console.log('Faculty array not found');
}
