import React from 'react';

const OfferList = ({ offers = [], swappedWith, onOfferClick }) => {
  return (
    <div className="flex flex-col items-center">
      {offers.length > 0 && !swappedWith ? (
        offers.map((offer, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
            onClick={() => onOfferClick(offer)}
          >
            {offer.name}
          </button>
        ))
      ) : (
        <button
          className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
          disabled
        >
          {swappedWith ? 'Swap Completed' : 'No Offers Available'}
        </button>
      )}
    </div>
  );
};

export default OfferList;
