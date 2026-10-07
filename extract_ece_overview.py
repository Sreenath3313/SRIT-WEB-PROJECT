import bs4, json

html = open(r'C:\Users\Sreenath\.gemini\antigravity-ide\brain\5961d24f-0775-4da9-ac2c-e37cac83699e\.system_generated\steps\390\content.md', encoding='utf-8').read()
soup = bs4.BeautifulSoup(html, 'html.parser')
accordions = soup.find_all('div', class_='elementor-accordion-item')

res = []
for a in accordions:
    title_elem = a.find(class_='elementor-accordion-title')
    if not title_elem: continue
    title = title_elem.text.strip()
    
    iframe = a.find('iframe')
    src = ''
    if iframe:
        src = iframe.get('data-lazy-src') or iframe.get('src')
        if src == 'about:blank':
            noscript = a.find('noscript')
            if noscript:
                ns_iframe = noscript.find('iframe')
                if ns_iframe:
                    src = ns_iframe.get('src')
    
    content = ""
    if src and src != 'about:blank':
        content = f'<iframe src="{src}" width="100%" height="500" style="border: none; overflow: hidden;"></iframe>'
    
    if content or title:
        res.append({
            'title': title,
            'content': content
        })

print(json.dumps(res, indent=2))
