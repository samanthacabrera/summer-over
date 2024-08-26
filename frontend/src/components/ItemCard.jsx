import React from 'react';
import OfferList from './OfferList';

const ItemCard = ({ item, onOfferClick }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <button className={`mt-2 px-4 py-2 text-white rounded ${item.swappedWith ? 'bg-green-500' : 'bg-red-500'}`}>
          {item.swappedWith ? 'Swapped' : 'Unswapped'}
        </button>
      </div>

      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        {item.swappedWith ? (
          <div className="text-center">
            <span className="block mt-2 text-gray-700">{item.swappedWith}</span>
          </div>
        ) : (
          <div className="text-center">
            <span className="block mt-2 text-gray-400">n/a</span>
          </div>
        )}
      </div>

      <div className="w-full md:w-1/3 text-center">
        <OfferList 
          offers={item.offers} 
          swappedWith={item.swappedWith}
          onOfferClick={(offer) => onOfferClick(item.id, offer)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
