const API_KEY = 'AIzaSyD1rZfFi1AUMMy7Sa11Prd2rdKb8to5a6Y';
const DRIVE_URL = 'https://drive.google.com/drive/folders/1nKAFgDXkQJq0Jvr8L-Yn8fZo9TifdJuX?usp=sharing';
const FOLDER_ID = '1nKAFgDXkQJq0Jvr8L-Yn8fZo9TifdJuX';

async function getDriveImages() {
  const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id, name)`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.files) {
      displayImages(data.files);
    } else {
      console.error('No images found');
    }
  } catch (error) {
    console.error('there was an error', error);
  }
}

function displayImages(files) {
  const gallery = document.querySelector('.gallery');

  files.forEach((file) => {
    const puppyCard = document.createElement('div');
    puppyCard.classList.add('puppy-card');

    const imgUrl = `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;

    puppyCard.innerHTML = `<a href="${imgUrl}"><img src="${imgUrl}" alt="${file.name}"></a>`;

    gallery.appendChild(puppyCard);
  });
}

getDriveImages();
