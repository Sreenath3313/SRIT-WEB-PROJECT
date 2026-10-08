const fs = require('fs');
const departmentFile = 'c:/Users/Sreenath/Desktop/SRIT-WEB-PROJECT-main/src/features/departments/eee/data/department.ts';

const links = {
  "Dr. G. Balakrishna": "https://srit.ac.in/dr-g-balakrishna/",
  "Dr. G. Meerimatha": "https://srit.ac.in/dr-g-meerimatha/",
  "Dr. U. Sreenivas": "https://srit.ac.in/dr-u-srinivas-2/",
  "Dr. P. Padmavathi": "https://srit.ac.in/p-padmavathi/",
  "Dr. S. Bhargava Reddy": "https://srit.ac.in/dr-s-bhargava-reddy/",
  "Mr. K. Vinod Kumar": "https://srit.ac.in/mr-k-vinod-kumar/",
  "Mr. T. Aravind Babu": "https://srit.ac.in/mr-t-aravind-babu/",
  "Mr. Y. Sathish Kumar": "https://srit.ac.in/mr-y-sathish-kumar/",
  "Mrs. B. Shravani": "https://srit.ac.in/mrs-b-sravani/",
  "Mr. M. V. Pavan Kumar": "https://srit.ac.in/mr-m-v-pavan-kumar/",
  "Mrs. M. Sushmi": "https://srit.ac.in/mr-s-suresh-2/",
  "Mrs. N Sai Deepthi": "https://srit.ac.in/ms-p-keerthi/",
  "Mrs. K.T. Prashanthi": "https://srit.ac.in/ms-k-t-prasanthi/",
  "Mr. K M . Sivasankara Reddy": "https://srit.ac.in/mr-m-yellaiah/",
  "Mrs. C K . Bharathi": "https://srit.ac.in/mr-v-ravi-teja/",
  "Mr. N. Naresh Gupta": "https://srit.ac.in/mr-n-naresh-gupta/",
  "Mrs. A C Jeevitha": "https://srit.ac.in/mr-n-naresh-gupta-2/",
  "Mrs.H.Subhashini Bai": "https://srit.ac.in/mr-n-naresh-gupta-2/",
  "Mr.D.Mahaboob Basha": "https://srit.ac.in/mr-n-naresh-gupta-2/",
  "Mrs B. Aruna": "https://srit.ac.in/mr-n-naresh-gupta-2/",
  "Mr.M.Nagaraju": "https://srit.ac.in/mr-n-naresh-gupta-2/",
  "Mr.V.Ravi Theja": "https://srit.ac.in/mr-n-naresh-gupta-2/",
  "Mrs.M.Anusha": "https://srit.ac.in/mr-n-naresh-gupta-2/",
  "Mr.G.Dileep Kumar": "https://srit.ac.in/mr-n-naresh-gupta-2/",
  "Mrs.P.Naga Swetha": "https://srit.ac.in/mr-n-naresh-gupta-2/"
};

let content = fs.readFileSync(departmentFile, 'utf8');

// Regex to find faculty blocks
// example:
//        {
//                "name": "Dr. G. Balakrishna",
//                "designation": "Professor & Principal",
//                "qualification": "M. Tech. Ph. D.",
//                "joiningDate": "25/11/2016",
//                "association": "Regular",
//                "image": "/principal.jpg"
//        },

for (const name in links) {
    const profileUrl = links[name];
    // We will match the block and append "profileUrl": "..."
    const blockRegex = new RegExp('(\\"name\\"\\s*:\\s*\\"' + name.replace(/[-/\\^$*+?.()|[]{}]/g, '\\$&') + '\\"[^\\}]*?)(\n\\s*)\\}(?=\\s*,|\\s*\\])', 'g');
    content = content.replace(blockRegex, (match, p1, p2) => {
        if(p1.includes('profileUrl')) return match;
        return p1 + ',' + p2 + '    "profileUrl": "' + profileUrl + '"' + p2 + '}';
    });
}

fs.writeFileSync(departmentFile, content);
console.log("Updated department.ts");
