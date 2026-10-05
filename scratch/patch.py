import os
from glob import glob

def replace_in_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements:
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

# 1. Fix imports in data and index files
for file in glob("src/features/departments/**/*.ts", recursive=True):
    replace_in_file(file, [
        ("import { DepartmentData } from", "import type { DepartmentData } from"),
        ("import { GalleryImage } from", "import type { GalleryImage } from")
    ])

# 2. Fix component paths
shared_dir = "src/features/departments/shared/components"
replace_in_file(f"{shared_dir}/DepartmentEContent.tsx", [
    ("../../components/common/DepartmentAccordion", "../../../../components/common/DepartmentAccordion")
])
replace_in_file(f"{shared_dir}/DepartmentFaculty.tsx", [
    ("../../components/common/DepartmentAccordion", "../../../../components/common/DepartmentAccordion")
])
replace_in_file(f"{shared_dir}/DepartmentStudentChapters.tsx", [
    ("../../components/common/DepartmentAccordion", "../../../../components/common/DepartmentAccordion")
])
replace_in_file(f"{shared_dir}/DepartmentOverview.tsx", [
    ("../../components/common/SpreadsheetTable", "../../../../components/common/SpreadsheetTable"),
    ("../../components/common/ContentRenderer", "../../../../components/common/ContentRenderer")
])
