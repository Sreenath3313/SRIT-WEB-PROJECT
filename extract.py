import re
with open(r'C:\Users\Latha Neeruganti\.gemini\antigravity-ide\brain\778001a7-1ee2-49fa-b485-3c4a987ba946\.system_generated\steps\74\content.md', 'r', encoding='utf-8') as f:
    text = f.read()
idx = text.find('Software used')
if idx != -1:
    print(text[max(0, idx-500) : idx+2000])
else:
    print("Not found")
