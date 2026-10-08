import re
import sys

try:
    with open('civil_page.html', 'r', encoding='utf-16') as f:
        html = f.read()
except:
    with open('civil_page.html', 'r', encoding='utf-8') as f:
        html = f.read()

# match <a class="elementor-accordion-title"...> TITLE </a>
# and then find the nearest iframe data-lazy-src or src
titles = re.findall(r'<a[^>]*class="elementor-accordion-title"[^>]*>([^<]+)</a>', html)
for title in titles:
    idx = html.find(f'>{title}</a>')
    if idx != -1:
        search_area = html[idx:idx+3000]
        match = re.search(r'https://docs\.google\.com/spreadsheets/d/e/[a-zA-Z0-9_-]+/pubhtml\?widget=true(?:&#038;|&amp;|&)headers=false', search_area)
        if match:
            url = match.group(0).replace('&#038;', '&').replace('&amp;', '&')
            print(f"{title}|||{url}")
