import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center space-x-4 my-12">
      <button
        className={`p-2 rounded-full hover:scale-105 transition duration-200 ${filter === 'all' ? 'font-semibold text-xl' : ''}`}
        onClick={() => setFilter('all')}
      >
        All Swaps
      </button>
      <button
        className={`p-2 rounded-full hover:scale-105 transition duration-200 ${filter === 'current' ? 'font-semibold text-xl' : ''}`}
        onClick={() => setFilter('current')}
      >
        Current Swaps
      </button>
      <button
        className={`p-2 rounded-full hover:scale-105 transition duration-200 ${filter === 'past' ? 'font-semibold text-xl' : ''}`}
        onClick={() => setFilter('past')}
      >
        Past Swaps
      </button>
    </div>
  );
};

export default Filter;
