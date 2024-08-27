import React from 'react';

const OfferList = ({ offers = [], swappedWith, onOfferClick }) => {
  return (
    <div className="flex flex-col items-center">
      {offers.length > 0 && !swappedWith ? (
        <>
          <h2 className="font-semibold mb-4">Available Swap Offers:</h2>
          <div className="space-y-2 w-full">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="flex items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-200 space-x-4"
              >
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold">{offer.name}</h4>
                  <p className="text-sm text-gray-500">Condition: {offer.condition}</p>
                  <p className="text-sm text-gray-500">Size: {offer.size}</p>
                </div>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                  onClick={() => onOfferClick(offer)}
                >
                  View Offer
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {!swappedWith ? (
            <p>No offers available</p>
          ) : (
            <button className="p-2 border rounded hover:bg-white hover:text-slate-400 transition duration-200">
              Message Owner
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default OfferList;
