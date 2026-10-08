import json
import csv
import re

faculty = []
with open('eee_faculty_2.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        name = row.get('Name of the Faculty', '').strip()
        if not name: continue
        
        member = {
            'name': name,
            'designation': row.get('Designation', '').strip(),
            'qualification': row.get('Qualification', '').strip(),
            'joiningDate': row.get('Date of Joining', '').strip(),
            'association': row.get('Nature of Association', '').strip(),
        }
        faculty.append(member)

json_str = json.dumps(faculty, indent=8)

with open('src/features/departments/eee/data/department.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the faculty array content
pattern = r'"faculty":\s*\[.*?\](?=,)'
replacement_str = f'"faculty": {json_str}'

# Using sub with a function to avoid backslash escaping issues
def repl(m):
    return replacement_str

new_content = re.sub(pattern, repl, content, flags=re.DOTALL)

with open('src/features/departments/eee/data/department.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated department.ts!')
