import requests
from parsel import Selector

# Exercicio 1
response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text)

# Exercicio 2
response = requests.get("https://api.github.com/users")
users = response.json()
for user in users:
    print(user["login"], user["url"])

# Exercicio 3
response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
print(response.text)
assert "bot detected" not in response.text

# Exercicio 4
response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(response.text)

title = selector.css(".col-sm-6.product_main h1::text").get()

price = selector.css(".price_color::text").re_first(r"\d+\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

url_image = (
    "http://books.toscrape.com/catalogue/"
    + selector.css(".item.active img::attr(src)").get()
)

print(f"{title}, {price}, {description}, {url_image}")
