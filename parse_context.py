import re

with open('output_context.txt', 'r', encoding='utf-16', errors='ignore') as f:
    text = f.read()

# Split by the separator ">" or just look for the URLs and then scan backwards
blocks = re.split(r'\n>\s*civil_page.html', text)
for block in blocks:
    if 'docs.google.com/spreadsheets' in block:
        url_match = re.search(r'https://docs\.google\.com/spreadsheets/d/e/[a-zA-Z0-9_-]+/pubhtml\?widget=true', block)
        if url_match:
            # try to find accordion title
            title_match = re.search(r'class="elementor-accordion-title"[^>]*>([^<]+)</a>', block)
            if title_match:
                print(f"Title: {title_match.group(1).strip()}")
                print(f"URL: {url_match.group(0)}")
                print("---")
