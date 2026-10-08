from html.parser import HTMLParser
import json

class SheetParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_td = False
        self.in_tr = False
        self.current_data = []
        self.current_row = []
        self.in_tbody = False

    def handle_starttag(self, tag, attrs):
        if tag == 'tbody':
            self.in_tbody = True
        if tag == 'tr' and self.in_tbody:
            self.in_tr = True
            self.current_row = []
        if tag == 'td' and self.in_tr:
            self.in_td = True
            self.current_cell = []

    def handle_endtag(self, tag):
        if tag == 'tbody':
            self.in_tbody = False
        if tag == 'td' and self.in_td:
            self.in_td = False
            self.current_row.append(' '.join(self.current_cell).strip())
        if tag == 'tr' and self.in_tr:
            self.in_tr = False
            if any(self.current_row):
                self.current_data.append(self.current_row)

    def handle_data(self, data):
        if self.in_td:
            self.current_cell.append(data)

with open(r'C:\Users\Sreenath\.gemini\antigravity-ide\brain\6c152058-1a04-405d-a396-1f619cbaec03\.system_generated\steps\480\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

parser = SheetParser()
parser.feed(html)

print(json.dumps(parser.current_data[:50], indent=2))
