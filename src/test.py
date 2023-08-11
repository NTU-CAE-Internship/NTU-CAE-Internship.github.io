import requests

url = 'https://deep-index.moralis.io/api/v2/nft/search?chain=bsc&format=decimal&q=Pancake&filter=name'

headers = {
    "Accept": "application/json",
    "X-API-KEY": "q41e2n0HGRJErxplB3B9nAy7FOcGqeXNNKZX3Q88hyVZ5IK8EjHb50ZjFuwmH9en"
}

res = requests.request("GET", url, headers=headers)
print(res.json())

