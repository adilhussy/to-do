import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

const ParkMap = ({ parks }) => {
  // Default center coordinates for New York City
  const defaultCenter = [40.7128, -74.0060];
  const defaultZoom = 11;

  // Function to convert borough code to full name
  const getBoroughName = (code) => {
    const boroughs = {
      'M': 'Manhattan',
      'B': 'Brooklyn',
      'Q': 'Queens',
      'X': 'Bronx',
      'R': 'Staten Island'
    };
    return boroughs[code] || code;
  };

  // Function to extract coordinates from park data
  const getCoordinates = (park) => {
    // If we have explicit coordinates in our data
    if (park.location.coordinates && 
        park.location.coordinates.latitude && 
        park.location.coordinates.longitude) {
      return [
        parseFloat(park.location.coordinates.latitude),
        parseFloat(park.location.coordinates.longitude)
      ];
    }
    
    // Default coordinates based on borough if specific coordinates aren't available
    const boroughCoordinates = {
      'M': [40.7831, -73.9712], // Manhattan
      'B': [40.6782, -73.9442], // Brooklyn
      'Q': [40.7282, -73.7949], // Queens
      'X': [40.8448, -73.8648], // Bronx
      'R': [40.5795, -74.1502]  // Staten Island
    };
    
    return boroughCoordinates[park.borough] || defaultCenter;
  };

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer 
        center={defaultCenter} 
        zoom={defaultZoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {parks.map((park, index) => {
          const coordinates = getCoordinates(park);
          return (
            <Marker key={index} position={coordinates}>
              <Popup>
                <div>
                  <h3 className="font-semibold">{park.name}</h3>
                  <p>{getBoroughName(park.borough)}</p>
                  {park.location.zip_code && (
                    <p className="text-sm">ZIP: {park.location.zip_code}</p>
                  )}
                  {park.amenities.off_leash_hours && park.amenities.off_leash_hours !== 'Unknown' && (
                    <p className="text-sm mt-1">
                      <span className="font-medium">Off-leash hours:</span> {park.amenities.off_leash_hours}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default ParkMap;
