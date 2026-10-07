import json
import re

json_path = 'has_faculty_with_links.json'
ts_path = r'c:\Users\Sreenath\Desktop\SRIT-WEB-PROJECT-main\src\features\departments\has\data\department.ts'

with open(json_path, 'r') as f:
    faculty_data = json.load(f)

# Convert to formatted string
faculty_str = json.dumps(faculty_data, indent=8)
# Add some spaces and fix indentation
faculty_str = faculty_str.replace('\n', '\n    ')
faculty_str = '    "faculty": ' + faculty_str.strip() + ','

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# find where "faculty": [ ... ] is and replace it
# We will use regex to find the 'faculty' key and its array
pattern = re.compile(r'    "faculty": \[\s*(?:\{[^\}]*\},\s*)*\{[^\}]*\}\s*\],', re.MULTILINE)
new_content = pattern.sub(faculty_str, content)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated department.ts")
