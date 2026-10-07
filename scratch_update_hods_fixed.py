import os
import glob
import re
import json

departments_dir = r"c:\Users\Sreenath\Desktop\SRIT-WEB-PROJECT-main\src\features\departments"

for ts_file in glob.glob(os.path.join(departments_dir, '*', 'data', 'department.ts')):
    with open(ts_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract faculty array string
    faculty_match = re.search(r'"faculty"\s*:\s*\[(.*?)\]\s*(?:,\s*"[a-zA-Z]+"\s*:|$)', content, re.DOTALL)
    if not faculty_match:
        # Check without quotes for key
        faculty_match = re.search(r'faculty\s*:\s*\[(.*?)\]\s*(?:,\s*"[a-zA-Z]+"\s*:|$)', content, re.DOTALL)
        
    if not faculty_match:
        print(f"No faculty array found in {ts_file}")
        continue
        
    faculty_str = faculty_match.group(1)
    
    # Extract individual faculty objects
    # This regex is simplified and might need to be adjusted
    faculty_objects = re.finditer(r'\{([^{}]*)\}', faculty_str)
    
    hod_name = None
    hod_profile = None
    
    for obj_match in faculty_objects:
        obj_str = obj_match.group(1)
        
        name_match = re.search(r'"name"\s*:\s*"([^"]+)"', obj_str)
        if not name_match: name_match = re.search(r'name\s*:\s*"([^"]+)"', obj_str)
        
        designation_match = re.search(r'"designation"\s*:\s*"([^"]+)"', obj_str)
        if not designation_match: designation_match = re.search(r'designation\s*:\s*"([^"]+)"', obj_str)
        
        profile_match = re.search(r'"profileUrl"\s*:\s*"([^"]+)"', obj_str)
        if not profile_match: profile_match = re.search(r'profileUrl\s*:\s*"([^"]+)"', obj_str)
        
        if name_match and designation_match:
            designation = designation_match.group(1).lower()
            if "head" in designation or "hod" in designation:
                hod_name = name_match.group(1)
                if profile_match:
                    hod_profile = profile_match.group(1)
                break
    
    if hod_name:
        # Now update hodMessage block
        hod_block_pattern = r'("hodMessage"\s*:\s*\{[^}]*?"name"\s*:\s*)"[^"]+"'
        new_content = re.sub(hod_block_pattern, r'\g<1>"' + hod_name + '"', content)
        
        if new_content != content:
            with open(ts_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {ts_file} with HOD: {hod_name}")
        else:
            print(f"Could not update HOD for {ts_file} (maybe already updated or pattern failed)")
    else:
        print(f"No HOD found in faculty list for {ts_file}")

