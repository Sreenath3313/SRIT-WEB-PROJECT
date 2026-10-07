import urllib.request
import re
from bs4 import BeautifulSoup
import traceback

def get_image_from_google_site(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        soup = BeautifulSoup(html, 'html.parser')
        imgs = soup.find_all('img')
        for img in imgs:
            src = img.get('src')
            if src and src.startswith('https://'):
                return src
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        # traceback.print_exc()
    return None

test_url = 'https://sites.google.com/srit.ac.in/drpamudurthivinatha/home'
print(get_image_from_google_site(test_url))
