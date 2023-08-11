const options = {
    method: 'GET',
    headers: {Accept: 'application/json', 'X-API-KEY': 'q41e2n0HGRJErxplB3B9nAy7FOcGqeXNNKZX3Q88hyVZ5IK8EjHb50ZjFuwmH9en'}
  };
  
fetch('https://deep-index.moralis.io/api/v2/nft/search?chain=bsc&format=decimal&q=Pancake&filter=name', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));