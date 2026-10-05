import re
import json

html_path = r"C:\Users\Sreenath\.gemini\antigravity-ide\brain\bd1d2aa4-ba89-4d7d-8eb5-89178accd3b7\.system_generated\steps\285\content.md"
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find <div class="elementor-tabs-wrapper">
start = content.find('elementor-tabs-wrapper')
if start == -1:
    print("{}")
else:
    tabs = {}
    
    # We can search for all <a ... class="elementor-tab-title"...>...</a>
    # or <div class="elementor-tab-title"...>
    
    # In Elementor, tab content is usually in <div id="elementor-tab-content-..." class="elementor-tab-content ...">
    # And title is in id="elementor-tab-title-..."
    titles = re.findall(r'<div[^>]*id="(elementor-tab-title-[0-9]+)"[^>]*>(.*?)</div>', content)
    for title_id, title_text in titles:
        # cleanup title text
        title_text = re.sub(r'<[^>]+>', '', title_text).strip()
        
        # content id is usually the same but with 'content' instead of 'title'
        content_id = title_id.replace('title', 'content')
        content_match = re.search(f'<div[^>]*id="{content_id}"[^>]*>(.*?)</div>\\s*(?:<div class="elementor-tab-title|<section)', content, re.DOTALL)
        if content_match:
            tabs[title_text] = content_match.group(1).strip()
            
    print(json.dumps(tabs, indent=2))
