import React, { useState, useEffect } from 'react';

const LocalList = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [listings, setListings] = useState({});
  const [openCity, setOpenCity] = useState(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        const mockListings = {
          'Denver': [
            { id: 1, name: 'Vintage Dress', description: 'Beautiful vintage dress.', image: 'https://via.placeholder.com/150x250', size: 'M', condition: 'Good', owner: 'owner1@example.com' },
            { id: 2, name: 'Leather Jacket', description: 'Stylish leather jacket.', image: 'https://via.placeholder.com/150x250', size: 'L', condition: 'Excellent', owner: 'owner2@example.com' },
            { id: 3, name: 'Floral Skirt', description: 'Pretty floral skirt.', image: 'https://via.placeholder.com/150x250', size: 'S', condition: 'Fair', owner: 'owner3@example.com' },
          ],
          'Centennial': [
            { id: 4, name: 'Denim Jacket', description: 'Trendy denim jacket.', image: 'https://via.placeholder.com/150x250', size: 'M', condition: 'New', owner: 'owner4@example.com' },
            { id: 5, name: 'Wool Sweater', description: 'Cozy wool sweater.', image: 'https://via.placeholder.com/150x250', size: 'S', condition: 'Good', owner: 'owner5@example.com' },
            { id: 6, name: 'Summer Dress', description: 'Light summer dress.', image: 'https://via.placeholder.com/150x250', size: 'M', condition: 'Used', owner: 'owner6@example.com' },
          ],
          'Boulder': [
            { id: 7, name: 'Casual T-Shirt', description: 'Comfortable casual T-shirt.', image: 'https://via.placeholder.com/150x250', size: 'L', condition: 'Excellent', owner: 'owner7@example.com' },
            { id: 8, name: 'Running Shoes', description: 'Durable running shoes.', image: 'https://via.placeholder.com/150x250', size: '10', condition: 'Good', owner: 'owner8@example.com' },
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
    setCurrentItemIndex(0); // Reset index when changing city
  };

  const handleMessageOwner = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleNextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % (listings[openCity]?.length || 1));
  };

  const handlePrevItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex - 1 + (listings[openCity]?.length || 1)) % (listings[openCity]?.length || 1));
  };

  return (
    <div className="container mx-auto p-4">
      {location.latitude && location.longitude ? (
        <div className="max-w-4xl mx-auto">
          <h2 className="subheading">Nearby Swaps by City</h2>

          {/* Layout for larger screens */}
          <div className="hidden md:block">
            <div className="space-y-4">
              <div className="flex justify-center space-x-4 mb-4">
                {Object.keys(listings).map(city => (
                  <button
                    key={city}
                    className={`p-2 border rounded-full ${openCity === city ? 'font-semibold text-xl' : ''} hover:scale-105 transition-all duration-200`}
                    onClick={() => handleToggle(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
              {openCity && (
                <div className="flex flex-wrap justify-center">
                  {listings[openCity].map(item => (
                    <div key={item.id} className="flex flex-col space-y-4 rounded bg-green-800 bg-opacity-20 p-12 m-6 hover:-translate-y-1 hover:shadow-lg transition duration-200">
                      <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                      <img src={item.image} alt={item.name} className="h-48 object-cover rounded mb-2" /> 
                      <p className="text-sm mb-2">{item.description}</p>
                      <p className="text-sm mb-2">Size: {item.size}</p>
                      <p className="text-sm mb-2">Condition: {item.condition}</p>
                      <div className="flex justify-center space-x-2">
                        <button
                          className="p-2 bg-white rounded hover:scale-105 transition duration-200"
                          onClick={() => handleMessageOwner(item.owner)}
                        >
                          Message Owner
                        </button>
                        <button
                          className="p-2 bg-white rounded hover:scale-105 transition duration-200"
                          onClick={() => handleMessageOwner(item.owner)}
                        >
                          Make an Offer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Layout for small screens */}
          <div className="md:hidden space-y-4">
            {Object.keys(listings).map(city => (
              <div key={city} className="text-center">
                <button
                  className="w-full p-8 rounded-lg border-current border-8 shadow-lg hover:shadow-xl hover:bg-white hover:bg-opacity-30 transition-all duration-300"
                  onClick={() => handleToggle(city)}
                >
                  <h3 className="text-xl font-semibold mb-2">{city}</h3>
                  <p className="text-sm">{listings[city].length} items available</p>
                </button>
                {openCity === city && (
                  <div className="mt-4 space-y-4">
                    {listings[city].length > 0 && (
                      <div className="flex flex-col items-center p-8">
                        <div className="flex flex-col space-y-2 rounded bg-green-800 bg-opacity-20 py-6 px-12">
                          <h4 className="text-2xl my-4 font-semibold text-center">{listings[city][currentItemIndex].name}</h4>
                          <img src={listings[city][currentItemIndex].image} className="w-full h-64 object-cover rounded p-4" alt={listings[city][currentItemIndex].name} />
                          <p className="mb-2 text-center">{listings[city][currentItemIndex].description}</p>
                          <p className="text-center">Size: {listings[city][currentItemIndex].size}</p>
                          <p className="text-center">Condition: {listings[city][currentItemIndex].condition}</p>
                          <div className="flex justify-center space-x-4 pb-8">
                            <button
                              className="p-2 bg-white rounded hover:scale-105 transition duration-200"
                              onClick={() => handleMessageOwner(listings[city][currentItemIndex].owner)}
                            >
                              Message Owner
                            </button>
                            <button
                              className="p-2 bg-white rounded hover:scale-105 transition duration-200"
                              onClick={() => handleMessageOwner(listings[city][currentItemIndex].owner)}
                            >
                              Make an Offer
                            </button>
                          </div>
                        </div>

                        <div className="flex space-x-4 my-4">
                          <button
                            className="hover:underline pr-4"
                            onClick={handlePrevItem}
                            disabled={listings[city].length <= 1}
                          >
                            Prev
                          </button>

                          {`${currentItemIndex + 1}/${listings[city].length}`}

                          <button
                            className="hover:underline"
                            onClick={handleNextItem}
                            disabled={listings[city].length <= 1}
                          >
                            Next
                          </button>
                          
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading listings...</p>
      )}
    </div>
  );
};

export default LocalList;
