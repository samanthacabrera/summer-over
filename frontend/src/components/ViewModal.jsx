import React from 'react';

const ViewModal = ({ offer, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="rounded bg-gray-50 p-4 w-3/4 md:w-1/4">
        <div className="mb-2">
          <img 
            src={offer.image || "https://via.placeholder.com/150x200"} 
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
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
