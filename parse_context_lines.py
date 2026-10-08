import re

with open('output_context.txt', 'r', encoding='utf-16', errors='ignore') as f:
    lines = f.readlines()

current_title = None
for line in lines:
    title_match = re.search(r'class="elementor-accordion-title"[^>]*>([^<]+)</a>', line)
    if title_match:
        current_title = title_match.group(1).strip()
    
    url_match = re.search(r'https://docs\.google\.com/spreadsheets/d/e/[a-zA-Z0-9_-]+/pubhtml\?widget=true', line)
    if url_match and current_title:
        print(f"Title: {current_title}")
        print(f"URL: {url_match.group(0)}&headers=false")
        print("---")
        current_title = None
