import re

html_path = r'C:\Users\Sreenath\.gemini\antigravity-ide\brain\6c152058-1a04-405d-a396-1f619cbaec03\.system_generated\steps\24\content.md'
try:
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # We will search for typical URLs (like sites.google.com, in.linkedin.com, srit.ac.in, etc.)
    links = re.findall(r'href=\\?"(https?://[^\"]+)\\?"', html)
    print("Found links:", len(links))
    for link in links[:30]:
        print(link)
except Exception as e:
    print("Error:", e)
