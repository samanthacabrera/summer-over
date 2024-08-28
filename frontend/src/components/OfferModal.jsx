import React from 'react';

const OfferModal = ({ items, onSelectItem, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Select an Item to Swap</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => onSelectItem(item)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <button
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OfferModal;
