import React from 'react';

const ItemsList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;