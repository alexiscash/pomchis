import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import Photos from './pages/Photos';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photos" element={<Photos />} />
    </Routes>
  );
}
