import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p>Size: {item.size}</p>
      <p>Condition: {item.condition}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Offer a swap
      </button>
    </div>
  );
};

export default ItemCard;
