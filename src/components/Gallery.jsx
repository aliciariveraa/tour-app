// src/components/Gallery.jsx

import { useEffect, useState } from 'react';
import TourCard from './TourCard';


// The API endpoint where we get the tour data
const url = 'https://course-api.com/react-tours-project';

function Gallery({ tours, setTours, onRemove }) {
    // Loading state to handle fetch status
  const [loading, setLoading] = useState(true);
  // Error state to show if fetch fails
  const [error, setError] = useState(false);


  // Fetch tour data from API
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data); // Save tour data to state
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true); // Set error flag on failure
      setLoading(false);
    }
  };

  // Fetch tours when component mounts
  useEffect(() => {   
    fetchTours();
  }, []);



  if (loading) return <h2>Loading...</h2>;


  // Show error message with retry button
  if (error) return <h2>Failed to load tours. Please try again.</h2>;

     // Show message when no tours are left
  if (tours.length === 0)
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );


    // If everything is fine, show the list of tours
  return (
    <section>
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;
