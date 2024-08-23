import React, { useState, useEffect } from 'react';
import Map from '/Users/samanthacabrera/webDev/summer-over/frontend/src/components/Map.jsx';

const LocalList = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [listings, setListings] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        const mockListings = [
          { id: 1, name: 'Vintage Dress', latitude: latitude + 0.01, longitude: longitude + 0.01, description: 'Beautiful vintage dress.' },
          { id: 2, name: 'Leather Jacket', latitude: latitude - 0.01, longitude: longitude - 0.01, description: 'Stylish leather jacket.' },
        ];
        setListings(mockListings);
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  return (
    <div>
      {location.latitude && location.longitude ? (
        <Map latitude={location.latitude} longitude={location.longitude} listings={listings} />
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default LocalList;
