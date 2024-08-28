import React, { useState } from 'react';
import OfferCard from '../../components/OfferCard';
import Filter from '../../components/Filter';
import Stats from './Stats';

const Profile = () => {
  const user = 'Sam';
  const itemsSwapped = 10;
  const itemsDonated = 2;

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

  const handleFinalizeSwap = (accept) => {
    if (selectedItemId && selectedOffer) {
      if (accept) {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === selectedItemId && !item.swappedWith
              ? { ...item, swappedWith: selectedOffer.name }
              : item
          )
        );
      }
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
    <div className="flex flex-col p-8 min-h-screen space-y-12">
      <h1 className="mt-8 text-4xl self-center font-semibold">{user}'s Profile</h1>
        <Stats itemsSwapped={itemsSwapped} itemsDonated={itemsDonated} />
        <Filter filter={filter} setFilter={setFilter} />

      <div className="hidden md:grid md:grid-cols-5 gap-4 mb-6 text-lg font-semibold text-center">
        <div>My Item</div>
        <div>Status</div>
        <div>Swapped Item</div>
        <div>Offers</div>
      </div>

      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="border-current p-4 bg-white bg-opacity-50 rounded-lg border-current border-4 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/5">
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
              <div className="md:w-1/5">
                <p>{item.swappedWith ? 'Swapped' : 'Available'}</p>
              </div>
              <div className="md:w-1/5">
                <p>{item.swappedWith ? item.swappedWith : 'n/a'}</p>
              </div>
              <div className="md:w-2/5 mt-4 md:mt-0 space-y-4">
                {item.offers.length > 0 ? (
                  item.offers.map((offer, index) => (
                    <div key={index} className="pb-4 border-current border-b-2">
                      <h4 className="text-md font-semibold">{offer.name}</h4>
                      <p className="text-sm">{offer.description}</p>
                      <div className="flex justify-center space-x-2">
                        <button
                          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                          onClick={() => handleOfferClick(item.id, offer)}
                        >
                          View
                        </button>
                        <button
                          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                          onClick={() => handleFinalizeSwap(false)}
                        >
                          Decline
                        </button>
                        <button
                          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
                          onClick={() => handleFinalizeSwap(true)}
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  ))
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
          onFinalize={() => handleFinalizeSwap(true)}
        />
      )}
    </div>
  );
};

export default Profile;
