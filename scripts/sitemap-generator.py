from typing import List, Tuple
import json
import os, time, datetime

def get_url_from_type(args) -> str:
  category, type = args
  path = f'../src/data/{category}/json/{type}.json'
  epocTime = os.path.getmtime(path)
  lastmod = time.strftime('%Y-%m-%d', time.localtime(epocTime))
  urls = [
    f"""<url>
      <loc>https://izzhafeez.com/{category}/{type}/</loc>
      <canonical>https://izzhafeez.com/{category}/{type}/</canonical>
      <image:image>
        <image:loc>https://izzhafeez.com/img/types/{type}.svg</image:loc>
      </image:image>
      <priority>1.0</priority>
      <changefreq>monthly</changefreq>
      <lastmod>{lastmod}</lastmod>
    </url>"""
  ]
  with open(path) as f:
    data = json.load(f)
    for k, v in data.items():
      imgPath = f"img/{category}/{type}/{v.get('imgPath', '')}"
      priority = v.get('importance', v.get('aesthetics', 1))
      url = f"""<url>
        <loc>https://izzhafeez.com/{category}/{type}/{k}</loc>
        <canonical>https://izzhafeez.com/{category}/{type}/{k}</canonical>
        <image:image>
          <image:loc>https://izzhafeez.com/{imgPath}</image:loc>
        </image:image>
        <priority>{priority / 10}</priority>
        <changefreq>monthly</changefreq>
        <lastmod>{lastmod}</lastmod>
      </url>"""
      urls.append(url)
  return "\n".join(urls)

types: List[Tuple[str, str]] = [
  ('projects', 'coding'),
  ('projects', 'music'),
  ('projects', 'graphs'),
  ('projects', 'quizzes'),
  ('merits', 'experiences'),
  ('merits', 'awards'),
  ('merits', 'certificates'),
  ('merits', 'modules'),
  ('merits', 'languages'),
  ('merits', 'technologies'),
  ('merits', 'skills'),
  ('blog', 'malls'),
  ('blog', 'hikes')
]

def get_url_from_category(category):
  dt = datetime.datetime.now().strftime('%Y-%m-%d')
  url = f"""<url>
    <loc>https://izzhafeez.com/{category}</loc>
    <canonical>https://izzhafeez.com/{category}</canonical>
    <image:image>
      <image:loc>https://izzhafeez.com/img/types/{category}.svg</image:loc>
    </image:image>
    <priority>1.0</priority>
    <changefreq>always</changefreq>
    <lastmod>{dt}</lastmod>
  </url>
  <url>
    <loc>https://izzhafeez.com/{category}/all</loc>
    <canonical>https://izzhafeez.com/{category}/all</canonical>
    <image:image>
      <image:loc>https://izzhafeez.com/img/types/{category}.svg</image:loc>
    </image:image>
    <priority>0.5</priority>
    <changefreq>always</changefreq>
    <lastmod>{dt}</lastmod>
  </url>"""
  return url

categories = set(c for c, t in types)

urlset = '\n'.join(map(get_url_from_category, categories)) \
  + '\n'.join(map(get_url_from_type, types))
xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://izzhafeez.com/</loc>
    <canonical>https://izzhafeez.com</canonical>
    <image:image>
      <image:loc>https://izzhafeez.com/img/izzhafeez.png</image:loc>
    </image:image>
    <priority>1.0</priority>
    <changefreq>always</changefreq>
    <lastmod>2023-07-28</lastmod>
  </url>
  {urlset}
</urlset>'''

with open('../public/sitemap.xml', 'w') as f:
  f.write(xml)