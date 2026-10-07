import urllib.request
import re

url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTQ5wv5ghbN3FOkQcqhKoZjYsY036o4t31iBIl-o0oIoyJjb84ofpCS_ynt9W6Yg/pubhtml"
html = urllib.request.urlopen(url).read().decode('utf-8')

links = set(re.findall(r'https?://[^\s"\'<]+', html))
for l in links:
    if "srit.ac.in" in l or "vidwan" in l or "linkedin" in l or "google.com" not in l:
        print(l)
