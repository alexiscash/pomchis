console.log('coo coo cachoo');

const baseUrl = 'https://www.googleapis.com/drive/v3/about';
fetch(baseUrl, {
  clientID: clientID,
})
  .then((j) => j.json())
  .then(console.log);
