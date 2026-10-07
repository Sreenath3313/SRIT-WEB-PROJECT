import urllib.request
from bs4 import BeautifulSoup
import json

def main():
    url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTQ5wv5ghbN3FOkQcqhKoZjYsY036o4t31iBIl-o0oIoyJjb84ofpCS_ynt9W6Yg/pubhtml?widget=true&chrome=false&headers=false"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(html, 'html.parser')
        
        # In Google sheets pubhtml, data is in tables, usually the first tbody
        rows = soup.find_all('tr')
        
        faculty = []
        for row in rows:
            cells = row.find_all('td')
            if len(cells) >= 3:
                # get text
                name = cells[1].get_text(strip=True)
                designation = cells[2].get_text(strip=True)
                if name and name.lower() != 'name of the faculty' and designation:
                    faculty.append({
                        "name": name,
                        "designation": designation
                    })
        
        with open('faculty_data.json', 'w', encoding='utf-8') as f:
            json.dump(faculty, f, indent=4)
        print(f"Extracted {len(faculty)} faculty profiles.")

    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    main()
