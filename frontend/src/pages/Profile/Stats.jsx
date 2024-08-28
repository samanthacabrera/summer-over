import React from 'react';

const Stats = ({ itemsSwapped, itemsDonated}) => {
  return (
    <div className="flex flex-col items-start">
        <h2 className="text-xl underline font-semibold">Stats</h2>
          <p className="text-lg">Clothes Swapped: <span className="font-semibold">{itemsSwapped}</span></p>
          <p className="text-lg">Clothes Donated: <span className="font-semibold">{itemsDonated}</span></p>
    </div>
  );
};

export default Stats;
