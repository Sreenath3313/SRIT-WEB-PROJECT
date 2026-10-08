from bs4 import BeautifulSoup

with open('civil_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

titles = [
    "Student Academic Activities",
    "Students in Academic Events",
    "Publications",
    "Patents",
    "Faculty Certifications",
    "Faculty Development Program's",
    "Innovative Teaching Methodologies"
]

for title in titles:
    # Find element containing text
    elems = soup.find_all(string=lambda t: t and title.lower() in t.lower())
    for elem in elems:
        # traverse up to find an accordion wrapper, then find iframe
        parent = elem.parent
        while parent and parent.name != 'body':
            # Check next siblings for iframe
            next_node = parent.find_next('iframe')
            if next_node and next_node.get('src'):
                print(f"Title: {title}")
                print(f"URL: {next_node.get('src')}")
                print("---")
                break
            parent = parent.parent
