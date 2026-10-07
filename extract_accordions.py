import urllib.request
from bs4 import BeautifulSoup
import json

def main():
    url = "https://www.srit.ac.in/cse-artificial-intelligence-and-data-science-2"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(html, 'html.parser')
        
        # In elementor, accordions usually have class elementor-accordion-item
        accordions = soup.find_all('div', class_='elementor-accordion-item')
        if not accordions:
            accordions = soup.find_all('div', class_='elementor-toggle-item')
            
        data = []
        for acc in accordions:
            title_elem = acc.find('a', class_='elementor-accordion-title') or acc.find('a', class_='elementor-toggle-title')
            content_elem = acc.find('div', class_='elementor-tab-content')
            
            if title_elem and content_elem:
                title = title_elem.get_text(strip=True)
                
                # Check for iframes
                iframes = content_elem.find_all('iframe')
                if iframes:
                    # just keep the raw html for the content
                    content = str(content_elem.encode_contents().decode('utf-8')).strip()
                else:
                    content = str(content_elem.encode_contents().decode('utf-8')).strip()
                    
                data.append({
                    "title": title,
                    "content": content
                })
        
        with open('accordion_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4)
        print(f"Extracted {len(data)} items to accordion_data.json")

    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    main()
