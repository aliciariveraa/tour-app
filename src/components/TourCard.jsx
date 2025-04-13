// src/components/TourCard.jsx

import { useState } from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
     // State to toggle Read More / Show Less
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <h4 className="tour-price">${price}</h4>
        <p>
          {readMore ? info : `${info.slice(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? ' Show Less' : ' Read More'}
          </button>
        </p>
        <button className="btn-remove" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default TourCard;
