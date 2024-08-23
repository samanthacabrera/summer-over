import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import debounce from 'lodash.debounce'; 

const Map = ({ latitude, longitude, listings }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
     
      mapRef.current.setView([latitude, longitude], 13);
      updateMarkers();
      return;
    }

  
    mapRef.current = L.map(mapContainerRef.current).setView([latitude, longitude], 13);

   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapRef.current);

    
    L.marker([latitude, longitude])
      .addTo(mapRef.current)
      .bindPopup('You are here')
      .openPopup();

   
    updateMarkers();

    
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude]);

  const updateMarkers = debounce(() => {
    if (mapRef.current) {
      // Remove existing markers
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current.removeLayer(layer);
        }
      });

      // Add markers for nearby listings
      listings.forEach((listing) => {
        L.marker([listing.latitude, listing.longitude])
          .addTo(mapRef.current)
          .bindPopup(`<b>${listing.name}</b><br>${listing.description}`);
      });
    }
  }, 300); // Adjust debounce delay as needed

  return (
    <div
      ref={mapContainerRef}
      className="map-container"
    ></div>
  );
};

export default Map;
