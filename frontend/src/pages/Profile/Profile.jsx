import React, { useState } from 'react';
import Stats from './Stats';
import ItemCard from '../../components/ItemCard';
import OfferCard from '../../components/OfferCard';

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

  return (
    <div className="flex flex-col">
      <h1 className="mt-24 text-6xl self-center font-semibold w-fit p-8 rounded-lg hover:border-8 hover:bg-teal-700 hover:bg-opacity-50 transition-all duration-500">{user}'s Profile</h1>
      <h2 className="subheading">Swaps</h2>
     
      <div className="hidden md:grid md:grid-cols-4 gap-4 mb-6">
        <div className="col-span-1 font-semibold">My Item</div>
        <div className="col-span-1 font-semibold text-center">Swapped With</div>
        <div className="col-span-2 font-semibold text-center">Available Offers</div>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col md:grid md:grid-cols-4 gap-4">
           
            <div className="md:hidden">
              <ItemCard
                item={item} 
                onOfferClick={handleOfferClick}
              />
            </div>

      
            <div className="hidden md:flex md:col-span-1 p-4 border border-gray-200 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>

            <div className="hidden md:flex md:col-span-1 p-4 border border-gray-200 rounded-lg shadow-md mb-4">
              <p>{item.swappedWith ? item.swappedWith : 'n/a'}</p>
            </div>

            <div className="hidden md:flex md:col-span-2 border border-gray-200 rounded-lg shadow-md mb-4">
              {item.offers.length > 0 ? (
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-6 text-left">Name</th>
                      <th className="text-left">Description</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.offers.map((offer, index) => (
                      <tr key={index} className="border-t hover:bg-white hover:text-slate-400 transition duration-200">
                        <td>{offer.name}</td>
                        <td>{offer.description}</td>
                        <td className="py-4 text-center">
                          <button
                            className="px-4 py-2 border rounded-md"
                            onClick={() => handleOfferClick(item.id, offer)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center">No Offers</p>
              )}
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
      <Stats />
    </div>
  );
};

export default Profile;
