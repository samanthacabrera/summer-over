import React from 'react';

const OfferCard = ({ offer, onClose, onFinalize }) => {
  const handleDirectMessage = () => {
    console.log(`Direct messaging initiated with the owner of ${offer.name}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="rounded bg-gray-50 p-4 w-3/4 md:w-1/4">
      
        <div className="mb-2">
          <img 
            src="https://via.placeholder.com/150x200" 
            alt={offer.name} 
            className="w-full h-auto"
          />
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{offer.name}</h3>
        <p className="text-gray-700 mb-4">{offer.description}</p>
        
        <div className="flex justify-end space-x-2">
          <button
            className="hover:underline"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="hover:underline"
            onClick={handleDirectMessage}
          >
            Message Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
