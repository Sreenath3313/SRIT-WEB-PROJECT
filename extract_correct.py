from bs4 import BeautifulSoup
import sys

with open('civil_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

items = soup.find_all(class_='elementor-accordion-item')
for item in items:
    title_elem = item.find(class_='elementor-accordion-title')
    content_elem = item.find(class_='elementor-tab-content')
    if title_elem and content_elem:
        title_text = title_elem.text.strip()
        iframe = content_elem.find('iframe')
        if iframe:
            src = iframe.get('data-lazy-src') or iframe.get('src')
            if src and 'docs.google' in src:
                src = src.replace('&#038;', '&').replace('&amp;', '&')
                print(f"{title_text}|||{src}")

