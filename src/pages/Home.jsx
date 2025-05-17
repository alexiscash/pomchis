import { Link } from 'react-router';

import Header from '../components/Header';
import PuppyCard from '../components/PuppyCard';
import ParentCard from '../components/ParentCard';

import { parents, puppies } from '../puppies';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="content">
          {<Header />}

          <div className="gallery">
            {parents.map((p) => (
              <ParentCard key={p.id} {...p} />
            ))}
          </div>

          <div className="gallery">
            {puppies.map((p) => (
              <PuppyCard key={p.id} {...p} />
            ))}
          </div>

          <footer>
            <p>
              Want to see more pics? Click <Link to={'/photos'}>here</Link>
            </p>
            <p className="promo">
              Made by <a href="https://github.com/alexiscash">Alexis Rangel</a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
