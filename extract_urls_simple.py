import re

with open('civil_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

urls = re.findall(r'https://docs\.google\.com/spreadsheets/d/e/[a-zA-Z0-9_-]+/pubhtml\?widget=true.*?headers=false', html)
urls = list(set(urls))

for url in urls:
    # find where this url is used
    idx = html.find(url)
    if idx != -1:
        start = max(0, idx - 100)
        print("CONTEXT:", html[start:idx].replace('\n', ' '))
        print("URL:", url.replace('&#038;', '&').replace('&amp;', '&'))
        print("---")
