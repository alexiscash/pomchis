import { Link } from 'react-router';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://pomchis.netlify.app/.netlify/functions/fetchPhotos')
      .then((j) => j.json())
      .then((data) => {
        console.log(data.files.length);

        setPhotos(
          data.files.map((file) => {
            return {
              id: file.id,
              url: `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`,
              name: file.name,
            };
          })
        );
      });
  }, []);

  return (
    <div className="photos-container">
      <div className="content">
        <Header />
        <div className="gallery">
          {photos.length > 0 &&
            photos.map((p) => {
              return (
                <div className="photo-card" key={p.id}>
                  <a href={p.url}>
                    <img src={p.url} alt={p.name} />
                  </a>
                </div>
              );
            })}
        </div>

        <footer>
          <p>
            Want to go back? Click <Link to={'/'}>here</Link>
          </p>
          <p className="promo">
            Made by <a href="https://github.com/alexiscash">Alexis Rangel</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
