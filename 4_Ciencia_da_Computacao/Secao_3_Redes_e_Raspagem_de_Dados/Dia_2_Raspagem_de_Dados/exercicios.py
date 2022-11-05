import requests

# Exercicio 1
response = requests.get("https://httpbin.org/encoding/utf8")
print(response.text)
