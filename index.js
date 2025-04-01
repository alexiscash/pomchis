function displayImages(files) {
  fetch('https://pomchis.netlify.app/.netlify/functions/fetchPhotos')
    .then((j) => j.json())
    .then((data) => {
      const gallery = document.querySelector('.gallery');

      console.log(files);
      data.files.forEach((file) => {
        const puppyCard = document.createElement('div');
        puppyCard.classList.add('puppy-card');

        const imgUrl = `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;

        puppyCard.innerHTML = `<a href="${imgUrl}"><img src="${imgUrl}" alt="${file.name}"></a>`;

        gallery.appendChild(puppyCard);
      });
    });
}

displayImages();
