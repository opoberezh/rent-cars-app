import React, { useState } from 'react';
import { AdvertCard } from '../AdvertCard/AdvertCard';

const AdvertList = ({ data }) => {
  const [displayedItems, setDisplaydItems] = useState(12);

  const loadMore = () => {
    setDisplaydItems(prev => prev + 12);
  };

  return (
    <div>
      <ul>
        {data.slice(0, displayedItems).map(data => (
          <li key={data.id}>
            <AdvertCard item={data} />
          </li>
        ))}
      </ul>
      {displayedItems < data.length && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default AdvertList;

