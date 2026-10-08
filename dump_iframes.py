import re

with open('civil_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Find all iframe occurrences
import bs4
soup = bs4.BeautifulSoup(html, 'html.parser')
iframes = soup.find_all('iframe')

with open('iframes_dump.md', 'w', encoding='utf-8') as out:
    for i, iframe in enumerate(iframes):
        src = iframe.get('data-lazy-src') or iframe.get('src')
        if src and 'docs.google.com' in src:
            out.write(f"### Iframe {i}\n")
            out.write(f"URL: {src}\n")
            
            # extract text from all parent siblings or something?
            # actually, just print the text of the parent's parent
            parent = iframe.parent
            if parent:
                parent = parent.parent
                if parent:
                    # try to get the text of all previous siblings within the accordion item
                    accordion_item = iframe.find_parent(class_='elementor-accordion-item')
                    if accordion_item:
                        out.write(f"Accordion Text: {accordion_item.text.strip()}\n")
                    else:
                        out.write(f"Parent Text: {parent.text.strip()[:200]}\n")
            out.write("---\n")
