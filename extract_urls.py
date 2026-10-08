import re

with open('civil_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Try to find elements that look like Accordion titles and then the first iframe after them
# e.g., <div class="elementor-accordion-title">Faculty Profiles</div>
# ... <iframe src="...">

titles = [
    "Student Academic Activities",
    "Students in Academic Events",
    "Publications",
    "Patents",
    "Faculty Certifications",
    "Faculty Development Program's",
    "Innovative Teaching Methodologies"
]

results = {}

for title in titles:
    # Find the title
    title_match = re.search(r'>\s*([^<]*' + re.escape(title) + r'[^<]*)\s*<', html, re.IGNORECASE)
    if title_match:
        pos = title_match.end()
        # Find the next iframe
        iframe_match = re.search(r'<iframe[^>]+src="([^"]+)"', html[pos:])
        if iframe_match:
            results[title] = iframe_match.group(1)

for title, url in results.items():
    print(f"Title: {title}")
    print(f"URL: {url}")
    print("---")
