import React, { useState } from 'react';
import OfferCard from '../../components/OfferCard';
import Filter from '../../components/Filter';

const Profile = () => {
  const user = 'Sam';
  const initialItems = [
    { 
      id: 1, 
      name: 'Red Dress', 
      swappedWith: null, 
      city: 'Denver',
      offers: [
        { name: 'Blue Shirt', description: 'A stylish blue shirt made of 100% cotton.' },
        { name: 'Green Scarf', description: 'A warm green scarf, perfect for winter.' },
        { name: 'Yellow Hat', description: 'A bright yellow hat, great for sunny days.' }
      ] 
    },
    { 
      id: 2, 
      name: 'Leather Jacket', 
      swappedWith: null, 
      city: 'Denver',
      offers: [
        { name: 'Winter Coat', description: 'A heavy winter coat, ideal for snowy weather.' },
        { name: 'Brown Boots', description: 'Durable brown boots, made of genuine leather.' }
      ] 
    },
    { 
      id: 3, 
      name: 'Summer Hat', 
      swappedWith: 'Scarf', 
      city: 'Boulder',
      offers: [] 
    },
    { 
      id: 4, 
      name: 'Denim Jeans', 
      swappedWith: null, 
      city: 'Boulder',
      offers: [
        { name: 'Sneakers', description: 'Comfortable sneakers, perfect for running.' },
        { name: 'White T-Shirt', description: 'A classic white t-shirt, made of soft cotton.' },
        { name: 'Black Belt', description: 'A stylish black belt, adjustable and versatile.' }
      ] 
    },
    { 
      id: 5, 
      name: 'Wool Sweater', 
      swappedWith: null, 
      city: 'Centennial',
      offers: [
        { name: 'Red Scarf', description: 'A warm red scarf, perfect for chilly days.' },
        { name: 'Gray Beanie', description: 'A cozy gray beanie, great for winter.' }
      ] 
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleOfferClick = (itemId, offer) => {
    setSelectedOffer(offer);
    setSelectedItemId(itemId);
  };

  const handleFinalizeSwap = () => {
    if (selectedItemId && selectedOffer) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === selectedItemId && !item.swappedWith
            ? { ...item, swappedWith: selectedOffer.name }
            : item
        )
      );
      setSelectedOffer(null);
      setSelectedItemId(null);
    }
  };

  const handleCloseModal = () => {
    setSelectedOffer(null);
    setSelectedItemId(null);
  };

  const filteredItems = items.filter(item => {
    if (filter === 'past') return item.swappedWith;
    if (filter === 'current') return !item.swappedWith && item.offers.length > 0;
    return true;
  });

  return (
    <div className="flex flex-col p-8">
      <h1 className="mt-8 text-4xl self-center font-semibold">{user}'s Profile</h1>
      <h2 className="subheading mt-6">Swaps</h2>

      <Filter filter={filter} setFilter={setFilter} />

      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>{item.swappedWith ? `Swapped With: ${item.swappedWith}` : 'Available'}</p>
                <p>City: {item.city}</p>
              </div>
              <div className="md:w-2/3 mt-4 md:mt-0">
                {item.offers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {item.offers.map((offer, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="text-md font-semibold">{offer.name}</h4>
                        <p>{offer.description}</p>
                        <button
                          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                          onClick={() => handleOfferClick(item.id, offer)}
                        >
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center">No Offers</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedOffer && (
        <OfferCard
          offer={selectedOffer}
          onClose={handleCloseModal}
          onFinalize={handleFinalizeSwap}
        />
      )}
    </div>
  );
};

export default Profile;
