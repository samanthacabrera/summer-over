import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center my-4 space-x-4">
      <button
        className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('all')}
      >
        All Swaps
      </button>
      <button
        className={`px-4 py-2 rounded-md ${filter === 'current' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('current')}
      >
        Current Swaps
      </button>
      <button
        className={`px-4 py-2 rounded-md ${filter === 'past' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setFilter('past')}
      >
        Past Swaps
      </button>
    </div>
  );
};

export default Filter;
