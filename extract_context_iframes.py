import re
from bs4 import BeautifulSoup

with open('civil_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

iframes = soup.find_all('iframe')
for iframe in iframes:
    src = iframe.get('src')
    if not src or 'docs.google.com/spreadsheets' not in src:
        # Check data-lazy-src
        src = iframe.get('data-lazy-src')
        if not src or 'docs.google.com/spreadsheets' not in src:
            continue
            
    # Go up the tree and find the closest preceding elementor-tab-title or similar
    parent = iframe.parent
    context = ""
    while parent:
        if 'elementor-tab-content' in (parent.get('class') or []):
            # Find the corresponding title
            tab_id = parent.get('data-tab')
            if tab_id:
                title_elem = soup.find(class_='elementor-tab-title', attrs={'data-tab': tab_id})
                if title_elem:
                    context = title_elem.text.strip()
                    break
        parent = parent.parent
        
    print(f"Context: {context}")
    print(f"URL: {src}")
    print("---")
