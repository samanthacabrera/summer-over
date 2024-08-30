import React, { useState } from 'react';
import ViewModal from '../../components/ViewModal';
import Filter from '../../components/Filter';
import Stats from './Stats';

const Profile = () => {
  const user = 'Sam';
  const itemsSwapped = 2;

  const myItems = [
    {
      id: 1, 
      name: 'Ruffle Blouse', 
      swappedWith: null, 
      image: '/myitem1.jpg',
      offers: [
        { 
          name: 'Yellow Tank', 
          description: 'A stylish yellow tank top, perfect for warm weather.', 
          image: '/offer1.jpg' 
        },
        { 
          name: 'Oversized T-Shirt', 
          description: 'A relaxed-fit oversized t-shirt, great for casual wear.', 
          image: '/offer2.jpg' 
        },
        { 
          name: 'Green Button-up', 
          description: 'A versatile green button-up shirt, ideal for layering.', 
          image: '/offer3.jpg' 
        }
      ],
      completed: false
    },
    { 
      id: 2, 
      name: 'Linen Shorts', 
      swappedWith: null, 
      image: '/myitem2.jpg',
      offers: [
        { 
          name: 'Knit Poncho', 
          description: 'A cozy knit poncho, perfect for cooler days.', 
          image: '/offer4.jpg' 
        },
        { 
          name: 'Ribbed Top', 
          description: 'A comfortable ribbed top, suitable for layering.', 
          image: '/offer5.jpg' 
        }
      ],
      completed: false
    },
    { 
      id: 3, 
      name: 'Lace Top', 
      swappedWith: null, 
      image: '/myitem3.jpg',
      offers: [
        { 
          name: 'Cropped Cardigan', 
          description: 'A chic cropped cardigan, ideal for stylish layering.', 
          image: '/offer6.jpg' 
        },
        { 
          name: 'Ruffle Blouse', 
          description: 'A feminine ruffle blouse, great for dressing up.', 
          image: '/offer7.jpg' 
        }
      ],
      completed: false
    },
    { 
      id: 4, 
      name: 'Blue Blouse', 
      swappedWith: 'Denim Jacket', 
      image: '/myitem4.jpg',
      offers: [],
      completed: true
    }, 
    { 
      id: 5, 
      name: 'Strapless Top', 
      swappedWith: 'Casual Tank', 
      image: '/myitem5.jpg',
      offers: [],
      completed: true
    }
  ];

  const [items, setItems] = useState(myItems);
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
    if (filter === 'past') return item.swappedWith && item.completed;
    if (filter === 'current') return !item.swappedWith && item.offers.length > 0;
    return true;
  });

  return (
    <div className="flex flex-col p-8 min-h-screen space-y-12">
      <h1 className="mt-8 text-4xl self-center font-semibold">{user}'s Profile</h1>
      <Stats itemsSwapped={itemsSwapped} />
      <Filter filter={filter} setFilter={setFilter} />

      <div className="hidden md:grid md:grid-cols-2 mr-24 mb-6 text-lg font-semibold text-center">
          <div className="md:grid md:grid-cols-3">
            <div>My Item</div>
            <div>Status</div>
            <div>Swapped Item</div>
          </div>
          <div>Offers</div>
      </div>

      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="border-current p-4 bg-white bg-opacity-20 rounded-lg border-current border-4 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/6">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                {item.image && <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded mb-2" />}
              </div>
              <div className="md:w-1/6">
                <p>{item.swappedWith ? 'Swapped' : 'Available'}</p>
              </div>
              <div className="md:w-1/6">
                <p>{item.swappedWith ? item.swappedWith : 'n/a'}</p>
              </div>
              <div className="md:w-2/3 mt-4 md:mt-0 space-y-4">
                {item.offers.length > 0 ? (
                  item.offers.map((offer, index) => (
                    <div key={index} className="pb-4 border-current border-b-2">
                      <h4 className="text-md font-semibold">{offer.name}</h4>
                      <p className="text-sm">{offer.description}</p>
                      <div className="flex justify-center space-x-2">
                        <button
                          className="p-2 bg-white rounded hover:scale-105 hover:text-gray-500 transition duration-200"
                          onClick={() => handleOfferClick(item.id, offer)}
                        >
                          View
                        </button>
                        <button
                          className="p-2 bg-white rounded hover:scale-105 hover:text-red-500 transition duration-200"
                          onClick={() => handleFinalizeSwap(false)}
                        >
                          Decline
                        </button>
                        <button
                          className="p-2 bg-white rounded hover:scale-105 hover:text-green-500 transition duration-200"
                          onClick={() => handleFinalizeSwap(true)}
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm opacity-70">No current offers, swap complete.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedOffer && (
      <ViewModal
        item={items.find(item => item.id === selectedItemId)}
        offer={selectedOffer}
        onClose={handleCloseModal}
      />
      )}
    </div>
  );
};

export default Profile;
