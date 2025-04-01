require('dotenv').config();

console.log(process.env.TEST);

exports.handler = async function () {
  console.log('inside the handler');
  const API_KEY = process.env.API_KEY;
  const FOLDER_ID = '1nKAFgDXkQJq0Jvr8L-Yn8fZo9TifdJuX';
  const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id, name)`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Unable to fetch photos' }),
    };
  }
};
