import React from 'react';

const ParkFilters = ({ filters, onFilterChange }) => {
  const boroughs = [
    { value: 'M', label: 'Manhattan' },
    { value: 'B', label: 'Brooklyn' },
    { value: 'Q', label: 'Queens' },
    { value: 'X', label: 'Bronx' },
    { value: 'R', label: 'Staten Island' }
  ];

  const surfaceTypes = [
    { value: '', label: 'All Surface Types' },
    { value: 'Synthetic', label: 'Synthetic' },
    { value: 'Natural', label: 'Natural' },
    { value: 'Asphalt', label: 'Asphalt' },
    { value: 'Sand', label: 'Sand' },
    { value: 'Concrete', label: 'Concrete' },
    { value: 'Dirt and sand', label: 'Dirt and Sand' }
  ];

  const handleBoroughChange = (e) => {
    onFilterChange({
      ...filters,
      borough: e.target.value
    });
  };

  const handleAmenityChange = (amenity) => {
    onFilterChange({
      ...filters,
      amenities: {
        ...filters.amenities,
        [amenity]: !filters.amenities[amenity]
      }
    });
  };

  const handleSurfaceTypeChange = (e) => {
    onFilterChange({
      ...filters,
      surface_type: e.target.value
    });
  };

  const handleOffLeashHoursChange = (e) => {
    onFilterChange({
      ...filters,
      off_leash_hours: e.target.checked
    });
  };

  const resetFilters = () => {
    onFilterChange({
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
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Filter Dog Parks</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Borough</label>
        <select 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.borough}
          onChange={handleBoroughChange}
        >
          <option value="">All Boroughs</option>
          {boroughs.map((borough) => (
            <option key={borough.value} value={borough.value}>
              {borough.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Amenities</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="water_fountain"
              checked={filters.amenities.water_fountain}
              onChange={() => handleAmenityChange('water_fountain')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="water_fountain" className="ml-2 text-gray-700">
              Water Fountain
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="separate_small_dog_area"
              checked={filters.amenities.separate_small_dog_area}
              onChange={() => handleAmenityChange('separate_small_dog_area')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="separate_small_dog_area" className="ml-2 text-gray-700">
              Separate Small Dog Area
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="shade"
              checked={filters.amenities.shade}
              onChange={() => handleAmenityChange('shade')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="shade" className="ml-2 text-gray-700">
              Shade Available
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="waste_bags_provided"
              checked={filters.amenities.waste_bags_provided}
              onChange={() => handleAmenityChange('waste_bags_provided')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="waste_bags_provided" className="ml-2 text-gray-700">
              Waste Bags Provided
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="fenced"
              checked={filters.amenities.fenced}
              onChange={() => handleAmenityChange('fenced')}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="fenced" className="ml-2 text-gray-700">
              Fully Fenced
            </label>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Surface Type</label>
        <select 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.surface_type}
          onChange={handleSurfaceTypeChange}
        >
          {surfaceTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="off_leash_hours"
            checked={filters.off_leash_hours}
            onChange={handleOffLeashHoursChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="off_leash_hours" className="ml-2 text-gray-700">
            Has Off-Leash Hours
          </label>
        </div>
      </div>
      
      <button
        onClick={resetFilters}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default ParkFilters;
