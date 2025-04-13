// src/App.jsx


import { useState } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

function App() {
  // State to hold tour data
  const [tours, setTours] = useState([]); 


  // Handler to remove a tour by ID
  const removeTour = (id) => {
    const filtered = tours.filter(tour => tour.id !== id);
    setTours(filtered);
  };

  return (
    <main>
      <h1>Tour Comparison App</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
}

export default App;

