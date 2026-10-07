import re

html_path = r'C:\Users\Sreenath\.gemini\antigravity-ide\brain\6c152058-1a04-405d-a396-1f619cbaec03\.system_generated\steps\24\content.md'
try:
    with open(html_path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    # Extract all text in quotes
    matches = re.findall(r'\\"(.*?)\\"', text)
    
    print("Found potential names/designations:")
    for m in matches:
        if any(x in m for x in ["Dr.", "Mr.", "Mrs.", "Professor", "Asst", "Assoc", "HOD", "Head"]):
            print(m)
except Exception as e:
    print("Error:", e)
