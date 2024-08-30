import React from 'react';

const Stats = ({ itemsSwapped }) => {
  return (
    <div className="flex flex-col items-start p-4">
      <h2 className="text-xl underline font-semibold mb-2">Stats</h2>
      <p className="text-lg mb-1">Completed Swaps: <span className="font-semibold">{itemsSwapped}</span></p>
    </div>
  );
};

export default Stats;
