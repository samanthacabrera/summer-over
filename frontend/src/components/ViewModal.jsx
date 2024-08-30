import React from 'react';

const ViewModal = ({ item, offer, onClose, onFinalizeSwap }) => {
  if (!item || !offer) {
    return null;
  }

  const handleAccept = () => {
    onFinalizeSwap(true);
  };

  const handleDecline = () => {
    onFinalizeSwap(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div id="viewModal" className="rounded bg-gray-50 p-12">
        <h2 className="text-xl font-semibold mb-4">Offer Details</h2>
        <div className="mb-4">
          <img src={offer.image} alt={offer.name} className="w-full h-40 object-cover rounded" />
        </div>
        <h3 className="text-lg font-semibold">{offer.name}</h3>
        <p>{offer.description}</p>
        <div className="mt-4 flex justify-between">
          <button
            className="p-2 bg-white rounded hover:scale-105 transition duration-200 hover:text-green-600"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="p-2 bg-white rounded hover:scale-105 transition duration-200 hover:text-red-600"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
        <button
          className="hover:underline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewModal;
