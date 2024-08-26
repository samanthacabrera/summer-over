import React from 'react';

const OfferCard = ({ offer, onClose, onFinalize }) => {
  const handleDirectMessage = () => {
    console.log(`Direct messaging initiated with the owner of ${offer.name}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3">
        <h3 className="text-lg font-semibold mb-4">{offer.name}</h3>
        <p className="text-gray-700 mb-6">{offer.description}</p>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={handleDirectMessage}
          >
            Message Owner
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
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
