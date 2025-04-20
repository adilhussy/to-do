import { parks } from '@/data/parks';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ParkMap from '@/components/ParkMap';
import ParkFilters from '@/components/ParkFilters';
import ParkList from '@/components/ParkList';
import Layout from '@/components/Layout';

export default function Home() {
  const [filteredParks, setFilteredParks] = useState(parks);
  const [filters, setFilters] = useState({
    borough: '',
    amenities: {
      water_fountain: false,
      separate_small_dog_area: false,
      shade: false,
      waste_bags_provided: false,
      fenced: false
    },
    surface_type: '',
    off_leash_hours: false
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    
    // Apply filters
    let results = parks;
    
    // Filter by borough
    if (newFilters.borough) {
      results = results.filter(park => park.borough === newFilters.borough);
    }
    
    // Filter by amenities
    Object.entries(newFilters.amenities).forEach(([amenity, isSelected]) => {
      if (isSelected) {
        results = results.filter(park => 
          park.amenities[amenity] && 
          park.amenities[amenity] !== 'Unknown' && 
          park.amenities[amenity] !== 'No'
        );
      }
    });
    
    // Filter by surface type
    if (newFilters.surface_type) {
      results = results.filter(park => 
        park.amenities.surface_type === newFilters.surface_type
      );
    }
    
    // Filter by off-leash hours
    if (newFilters.off_leash_hours) {
      results = results.filter(park => 
        park.amenities.off_leash_hours && 
        park.amenities.off_leash_hours !== 'Unknown'
      );
    }
    
    setFilteredParks(results);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">New York City Dog Parks Directory</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ParkFilters filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          <div className="lg:col-span-2">
            <ParkMap parks={filteredParks} />
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">
                {filteredParks.length} Dog Parks Found
              </h2>
              <ParkList parks={filteredParks} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
