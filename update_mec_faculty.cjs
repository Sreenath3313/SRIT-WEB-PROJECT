const fs = require('fs');

const mecFacultyData = [
  {
    "name": "Dr. K. JOHN SAMUEL",
    "designation": "Associate Professor & Head",
    "dateOfJoining": "19-06-2017",
    "qualification": "M. Tech. Ph. D.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/view/johnsamuel/"
  },
  {
    "name": "Dr. D. SAI CHAITANYA KISHORE",
    "designation": "Professor & Director IQAC",
    "dateOfJoining": "12-06-2017",
    "qualification": "M. Tech. Ph. D.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/srit.ac.in/me-dsck/"
  },
  {
    "name": "Dr. Y. RAMAMOHAN REDDY",
    "designation": "Professor",
    "dateOfJoining": "14-07-2014",
    "qualification": "M. Tech. Ph. D.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/srit.ac.in/ramamohan/home"
  },
  {
    "name": "Dr. B. ANJANEULU",
    "designation": "Professor",
    "dateOfJoining": "28-03-2022",
    "qualification": "M. Tech. Ph. D.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/srit.ac.in/anji/international-journals"
  },
  {
    "name": "Dr. S. SHARMAS VALI",
    "designation": "Associate Professor",
    "dateOfJoining": "18-04-2023",
    "qualification": "M. Tech. Ph. D.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/srit.ac.in/shaik-sharmas-vali/home"
  },
  {
    "name": "Dr. M. PEERU NAIK",
    "designation": "Associate Professor",
    "dateOfJoining": "09-12-2019",
    "qualification": "M. Tech. Ph. D.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/srit.ac.in/m-peeru-naik/home"
  },
  {
    "name": "Mr. A. VENKATA DHANUNJAYA REDDY",
    "designation": "Assistant Professor",
    "dateOfJoining": "01-06-2012",
    "qualification": "M. Tech., (Ph. D.)",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/srit.ac.in/a-venkata-dhanunjaya-reddy/home"
  },
  {
    "name": "Mr. K. BHARANI KUMAR REDDY",
    "designation": "Assistant Professor",
    "dateOfJoining": "01-10-2008",
    "qualification": "M. Tech.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/d/1UD7k-A4ucbpo1auoBAA6GXrXqzyT7APc/p/1FC5NREjt0zvkyTXlOpv5PpvLol4kr6p7/edit"
  },
  {
    "name": "Mr. C. H. JOSEPH SUNDAR",
    "designation": "Assistant Professor",
    "dateOfJoining": "21-06-2017",
    "qualification": "M. Tech.",
    "association": "Regular"
  },
  {
    "name": "Mr. D. BALAJI",
    "designation": "Assistant Professor",
    "dateOfJoining": "03-11-2021",
    "qualification": "M. Tech.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/view/dbalaji"
  },
  {
    "name": "Mrs. T KIRANMAYEE",
    "designation": "Assistant Professor",
    "dateOfJoining": "18-01-2021",
    "qualification": "M. Tech.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/view/kiranmait/home"
  },
  {
    "name": "Mr. B. SREENIVASULU",
    "designation": "Assistant Professor",
    "dateOfJoining": "07-08-2025",
    "qualification": "M. Tech.",
    "association": "Regular"
  },
  {
    "name": "Mr. N. PAVAN KUMAR",
    "designation": "Assistant Professor",
    "dateOfJoining": "27-02-2023",
    "qualification": "M. Tech.",
    "association": "Regular"
  },
  {
    "name": "Mr. B. RAMESH",
    "designation": "Assistant Professor",
    "dateOfJoining": "02-06-2025",
    "qualification": "M. Tech.",
    "association": "Regular",
    "profileUrl": "https://sites.google.com/view/bramesh/"
  }
];

const filePath = 'c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src/features/departments/mec/data/department.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find the start and end of the faculty array
const startRegex = /\"faculty\"\:\s*\[/;
const endRegex = /\]\,/;

const matchStart = startRegex.exec(content);
if (!matchStart) {
  console.error("Could not find 'faculty': [ start.");
  process.exit(1);
}

const startIndex = matchStart.index;
// Find the first '],' after startIndex
const contentAfterStart = content.substring(startIndex);
const matchEnd = endRegex.exec(contentAfterStart);
if (!matchEnd) {
  console.error("Could not find '],' end of faculty array.");
  process.exit(1);
}

const endIndex = startIndex + matchEnd.index + 1; // pointing to ']'

const formattedFaculty = "faculty\": [\n" + mecFacultyData.map(f => {
  return "        {\n" + 
    `            "name": "${f.name}",\n` + 
    `            "designation": "${f.designation}",\n` + 
    `            "qualification": "${f.qualification}",\n` + 
    (f.dateOfJoining ? `            "joiningDate": "${f.dateOfJoining}",\n` : "") + 
    (f.association ? `            "association": "${f.association}"` : "") + 
    (f.profileUrl ? `,\n            "profileUrl": "${f.profileUrl}"\n` : "\n") + 
    "        }";
}).join(",\n") + "\n    ]";

const newContent = content.substring(0, startIndex) + formattedFaculty + content.substring(endIndex);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Replaced MEC faculty data.");
