import React, { useState, useEffect } from 'react';
import ItemsList from '/Users/samanthacabrera/webDev/summer-over/frontend/src/components/ItemsList';

const LocalList = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [listings, setListings] = useState([]);
  const [openCity, setOpenCity] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        const mockListings = {
          'Denver': [
            { id: 1, name: 'Vintage Dress', description: 'Beautiful vintage dress.', image: 'url_to_image', size: 'M', condition: 'Good' },
            { id: 2, name: 'Leather Jacket', description: 'Stylish leather jacket.', image: 'url_to_image', size: 'L', condition: 'Excellent' },
            { id: 3, name: 'Floral Skirt', description: 'Pretty floral skirt.', image: 'url_to_image', size: 'S', condition: 'Fair' },
          ],
          'Centennial': [
            { id: 4, name: 'Denim Jacket', description: 'Trendy denim jacket.', image: 'url_to_image', size: 'M', condition: 'New' },
            { id: 5, name: 'Wool Sweater', description: 'Cozy wool sweater.', image: 'url_to_image', size: 'S', condition: 'Good' },
            { id: 6, name: 'Summer Dress', description: 'Light summer dress.', image: 'url_to_image', size: 'M', condition: 'Used' },
          ],
          'Boulder': [
            { id: 7, name: 'Casual T-Shirt', description: 'Comfortable casual T-shirt.', image: 'url_to_image', size: 'L', condition: 'Excellent' },
            { id: 8, name: 'Running Shoes', description: 'Durable running shoes.', image: 'url_to_image', size: '10', condition: 'Good' },
          ],
        };
        setListings(mockListings);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  const handleToggle = (city) => {
    setOpenCity(openCity === city ? null : city);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Local Swaps</h1>
      
      {location.latitude && location.longitude ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Available Listings by City</h2>
          <ul className="list-disc pl-5">
            {Object.keys(listings).map(city => (
              <li key={city} className="mb-4">
                <button
                  onClick={() => handleToggle(city)}
                  className="text-lg font-medium focus:outline-none"
                >
                  {city}
                </button>
                {openCity === city && (
                  <div className="mt-2 pl-4">
                    <ItemsList items={listings[city]} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading listings...</p>
      )}
    </div>
  );
};

export default LocalList;
