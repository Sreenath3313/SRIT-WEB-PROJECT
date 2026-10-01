import urllib.request, re
url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOYiWzEl6jy3tfGJuFG9_BN3gTOgiW-dNCc16_6jyLQk1DMdc9Ld8xSBKzyKSjXayy9JC07PWOCxf/pubhtml'
html = urllib.request.urlopen(url).read().decode('utf-8')
images = set(re.findall(r'http[s]?://[^\s\"\']*googleusercontent\.com[^\s\"\']*', html))
for img in images:
    print(img)
