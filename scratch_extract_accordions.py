import re
import sys

def main():
    filename = sys.argv[1]
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()

    for match in re.finditer(r'<iframe[^>]*src=[\'"]([^\'"]+)[\'"][^>]*>', text, re.IGNORECASE):
        start = max(0, match.start() - 300)
        end = min(len(text), match.end() + 300)
        context = text[start:end]
        
        # Look for tab titles
        title_match = re.search(r'elementor-tab-title[^>]*>.*?<a[^>]*>(.*?)</a>', text[max(0, start-1000):match.end()], re.IGNORECASE | re.DOTALL)
        if title_match:
            # get the last match before the iframe
            titles = re.findall(r'elementor-tab-title[^>]*>.*?<a[^>]*>(.*?)</a>', text[max(0, start-1000):match.start()], re.IGNORECASE | re.DOTALL)
            if titles:
                print(f"Title: {titles[-1].strip()}")
            else:
                print(f"Context: {context}")
        else:
            print(f"Context: {context}")
            
        print(f"Iframe: {match.group(1)}")
        print('-'*40)

if __name__ == '__main__':
    main()
