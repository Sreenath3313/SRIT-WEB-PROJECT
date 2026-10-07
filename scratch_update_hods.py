import os
import re
import glob
import json

departments_dir = r"c:\Users\Sreenath\Desktop\SRIT-WEB-PROJECT-main\src\features\departments"

# Simple regex to find HOD message block and faculty list block
def extract_hod(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find faculty list (best effort using regex)
    # This might be tricky for TS files, but let's look for "Head" in designation
    # We can try to extract names and designations using regex
    
    # regex for faculty objects: { "name": "...", "designation": "..." }
    faculty_matches = re.finditer(r'\{[^{}]*"name"\s*:\s*"(.*?)".*?"designation"\s*:\s*"(.*?)".*?\}', content, re.DOTALL)
    
    hod_name = None
    for match in faculty_matches:
        name = match.group(1)
        designation = match.group(2)
        if "head" in designation.lower() or "hod" in designation.lower():
            hod_name = name
            break
            
    if hod_name:
        # replace hodMessage name
        # "name": "..." inside hodMessage block
        # We need to make sure we replace the right one.
        # hodMessage: { ... "name": "OLD", ... }
        hod_block_pattern = r'("hodMessage"\s*:\s*\{.*?)"name"\s*:\s*"[^"]*"'
        new_content = re.sub(hod_block_pattern, r'\1"name": "' + hod_name + '"', content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {os.path.basename(os.path.dirname(os.path.dirname(file_path)))} with HOD: {hod_name}")
        else:
            print(f"Could not update HOD for {file_path}, but found name {hod_name}")
    else:
        print(f"No HOD found in {file_path}")


for ts_file in glob.glob(os.path.join(departments_dir, '*', 'data', 'department.ts')):
    extract_hod(ts_file)
