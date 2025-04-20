import React from 'react';
import Link from 'next/link';

const ParkList = ({ parks }) => {
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

  // Function to display amenities with icons
  const renderAmenities = (park) => {
    const amenities = [];
    
    if (park.amenities.water_fountain === 'Yes') {
      amenities.push({ icon: '💧', label: 'Water Fountain' });
    }
    
    if (park.amenities.separate_small_dog_area === 'Yes') {
      amenities.push({ icon: '🐕', label: 'Small Dog Area' });
    }
    
    if (park.amenities.shade === 'Yes') {
      amenities.push({ icon: '🌳', label: 'Shade' });
    }
    
    if (park.amenities.waste_bags_provided === 'Yes') {
      amenities.push({ icon: '🧹', label: 'Waste Bags' });
    }
    
    if (park.amenities.fenced === 'Yes') {
      amenities.push({ icon: '🔒', label: 'Fenced' });
    }
    
    if (park.amenities.surface_type && park.amenities.surface_type !== 'Unknown') {
      amenities.push({ icon: '🟩', label: park.amenities.surface_type });
    }
    
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {amenities.map((amenity, index) => (
          <span 
            key={index} 
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            title={amenity.label}
          >
            {amenity.icon} {amenity.label}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {parks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No dog parks match your filters. Try adjusting your criteria.</p>
        </div>
      ) : (
        parks.map((park) => (
          <div key={park.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/park/${encodeURIComponent(park.name)}`}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{park.name}</h3>
                <p className="text-gray-600 mt-1">{getBoroughName(park.borough)}</p>
                
                {park.location.zip_code && (
                  <p className="text-gray-500 text-sm mt-1">ZIP: {park.location.zip_code}</p>
                )}
                
                {park.amenities.off_leash_hours && park.amenities.off_leash_hours !== 'Unknown' && (
                  <div className="mt-2">
                    <span className="text-sm font-medium text-green-600">
                      Off-leash hours: {park.amenities.off_leash_hours}
                    </span>
                  </div>
                )}
                
                {renderAmenities(park)}
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ParkList;
