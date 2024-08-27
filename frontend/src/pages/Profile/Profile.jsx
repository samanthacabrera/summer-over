import React, { useState } from 'react';
import ItemCard from '../../components/ItemCard';
import OfferCard from '../../components/OfferCard';

const Profile = () => {
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile Page</h1>
      <p className="mb-6">Manage your items and view your swap history.</p>
      
      <div className="hidden md:grid grid-cols-3  mb-4">
        <h2 className="text-lg font-semibold">My Item</h2>
        <h2 className="text-lg font-semibold text-center">Swapped Item</h2>
        <h2 className="text-lg font-semibold text-center">Choose Swap</h2>
      </div>
      
      <div className="space-y-6">
        {items.map((item) => (
          <ItemCard
            key={item.id} 
            item={item} 
            onOfferClick={handleOfferClick}
          />
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
