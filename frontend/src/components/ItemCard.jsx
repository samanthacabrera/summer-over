import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="border">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48"
      />
      <h3 className="">{item.name}</h3>
      <p className="">Size: {item.size}</p>
      <p className="">Condition: {item.condition}</p>
      <button className="border">
        Offer a swap? 
      </button>
    </div>
  );
};

export default ItemCard;
