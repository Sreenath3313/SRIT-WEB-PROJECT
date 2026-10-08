const fs = require('fs');
let content = fs.readFileSync('src/features/departments/civil/data/department.ts', 'utf8');

content = content.replace(
  /\"hodMessage\"\: \{\r?\n\s*\"name\"\: \"Dr\. T\. Chinna Venkata Reddy\"\,\r?\n\s*\"designation\"\: \"Head of the Department\, Civil\"/,
  '\"hodMessage\": {\n        \"name\": \"Dr. U. Raghu Babu\",\n        \"designation\": \"Professor & Head\"'
);

fs.writeFileSync('src/features/departments/civil/data/department.ts', content, 'utf8');
console.log('Done');
