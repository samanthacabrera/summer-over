import React from 'react';

const OfferCard = ({ offer, onClose, onFinalize }) => {
  const handleDirectMessage = () => {
    console.log(`Direct messaging initiated with the owner of ${offer.name}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-11/12 md:w-1/3">
      
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
            className="p-2 border rounded text-slate-400 hover:text-slate-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="p-2 border rounded text-slate-400 hover:text-slate-500"
            onClick={handleDirectMessage}
          >
            Message Owner
          </button>
          <button
            className="p-2 border rounded text-slate-400 hover:text-green-500"
            onClick={onFinalize}
          >
            Finalize Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
