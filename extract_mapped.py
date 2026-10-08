import re
from bs4 import BeautifulSoup

with open('civil_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

tab_titles = {}
for title in soup.find_all(class_='elementor-tab-title'):
    tab_id = title.get('data-tab')
    # sometimes the ID is part of an outer element. Let's just use the id attribute if it exists
    title_id = title.get('id')
    if title_id:
        tab_titles[title_id] = title.text.strip()

tab_contents = soup.find_all(class_='elementor-tab-content')
results = {}
for content in tab_contents:
    title_id = content.get('aria-labelledby')
    if title_id and title_id in tab_titles:
        iframe = content.find('iframe')
        if iframe:
            src = iframe.get('data-lazy-src') or iframe.get('src')
            if src and 'docs.google.com' in src:
                # clean up src
                src = src.replace('&#038;', '&').replace('&amp;', '&')
                results[tab_titles[title_id]] = src

for title, url in results.items():
    print(f"Title: {title}")
    print(f"URL: {url}")
    print("---")
