import React from 'react';
import OfferList from '../pages/Profile/OfferList';

const ItemCard = ({ item, onOfferClick }) => {
  return (
    <div className="p-6 border border-slate-200 rounded-lg shadow-lg bg-white bg-opacity-10 hover:shadow-xl transition-all duration-300">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <button className={`mt-2 px-4 py-2 rounded bg-white bg-opacity-90 border font-bold ${item.swappedWith ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
          {item.swappedWith ? 'Swapped With' : 'Unswapped'}
        </button>
      </div>

      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        {item.swappedWith ? (
          <div className="text-center">
            <span className="block mt-2">{item.swappedWith}</span>
          </div>
        ) : (
          <></>
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
