import re
import json
from bs4 import BeautifulSoup

with open('civil_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
scripts = soup.find_all('script', type='application/ld+json')

# We want to extract specific Question names and their acceptedAnswer texts
targets = [
    "Student Academic Activities",
    "Students in Academic Events",
    "Publications",
    "Patents",
    "Faculty Certifications",
    "Faculty Development Program's",
    "Innovative Teaching Methodologies"
]

results = {}

for script in scripts:
    try:
        data = json.loads(script.string)
        if data.get('@type') == 'FAQPage':
            for entity in data.get('mainEntity', []):
                q_name = entity.get('name')
                if q_name in targets:
                    answer_html = entity.get('acceptedAnswer', {}).get('text', '')
                    # Extract iframe src
                    iframe_match = re.search(r'src=\\?"([^"\\]+)\\?"', answer_html)
                    if iframe_match:
                        url = iframe_match.group(1).replace('\\/', '/')
                        results[q_name] = url
                        print(f"{q_name}: {url}")
    except Exception as e:
        pass
