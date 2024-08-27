import React, { useState, useEffect } from 'react';

const LocalList = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [listings, setListings] = useState({});
  const [openCity, setOpenCity] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        const mockListings = {
          'Denver': [
            { id: 1, name: 'Vintage Dress', description: 'Beautiful vintage dress.', image: 'url_to_image', size: 'M', condition: 'Good', owner: 'owner1@example.com' },
            { id: 2, name: 'Leather Jacket', description: 'Stylish leather jacket.', image: 'url_to_image', size: 'L', condition: 'Excellent', owner: 'owner2@example.com' },
            { id: 3, name: 'Floral Skirt', description: 'Pretty floral skirt.', image: 'url_to_image', size: 'S', condition: 'Fair', owner: 'owner3@example.com' },
          ],
          'Centennial': [
            { id: 4, name: 'Denim Jacket', description: 'Trendy denim jacket.', image: 'url_to_image', size: 'M', condition: 'New', owner: 'owner4@example.com' },
            { id: 5, name: 'Wool Sweater', description: 'Cozy wool sweater.', image: 'url_to_image', size: 'S', condition: 'Good', owner: 'owner5@example.com' },
            { id: 6, name: 'Summer Dress', description: 'Light summer dress.', image: 'url_to_image', size: 'M', condition: 'Used', owner: 'owner6@example.com' },
          ],
          'Boulder': [
            { id: 7, name: 'Casual T-Shirt', description: 'Comfortable casual T-shirt.', image: 'url_to_image', size: 'L', condition: 'Excellent', owner: 'owner7@example.com' },
            { id: 8, name: 'Running Shoes', description: 'Durable running shoes.', image: 'url_to_image', size: '10', condition: 'Good', owner: 'owner8@example.com' },
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

  const handleMessageOwner = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-pink-50 to-white">
      
      {location.latitude && location.longitude ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Listings by City</h2>
          <ul className=" pl-5">
            {Object.keys(listings).map(city => (
              <li key={city} className="mb-4">
                <button
                  onClick={() => handleToggle(city)}
                  className="text-lg font-medium focus:outline-none"
                >
                  {city}
                </button>
                {openCity === city && (
                  <div className="mt-2 space-y-4">
                    {listings[city].map(item => (
                      <div key={item.id} className="p-4 border border-gray-200 rounded bg-white flex flex-col md:flex-row md:items-center md:space-x-4">
                        <img src={item.image}  className="w-full h-40 object-cover rounded md:w-1/3" />
                        <div className="mt-2 md:mt-0 md:w-2/3">
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-gray-700 mb-2">{item.description}</p>
                          <p className="text-gray-600">Size: {item.size}</p>
                          <p className="text-gray-600">Condition: {item.condition}</p>
                          <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => handleMessageOwner(item.owner)}
                          >
                            Message Owner
                          </button>
                        </div>
                      </div>
                    ))}
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
