import re

html_path = r"C:\Users\Sreenath\.gemini\antigravity-ide\brain\bd1d2aa4-ba89-4d7d-8eb5-89178accd3b7\.system_generated\steps\285\content.md"
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

text = re.sub(r'<[^>]+>', ' ', content)
text = re.sub(r'\s+', ' ', text).strip()

print(text[text.find('Intro of CAD Program'):text.find('Intro of CAD Program') + 2000])
