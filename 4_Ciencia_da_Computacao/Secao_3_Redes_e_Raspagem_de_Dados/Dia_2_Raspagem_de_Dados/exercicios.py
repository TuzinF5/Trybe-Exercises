import requests

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
