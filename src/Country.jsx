import React, { useState } from 'react';

const Country = ({ data = [] }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((country, index) => (
          <div
            key={index}
            className="countryContainer"
            style={{ cursor: 'pointer' }}
            onClick={() => handleCountryClick(country)}
          >
            <img
              src={country.flags?.svg || 'placeholder.png'}
              alt={`Flag of ${country.name?.common}`}
              style={{ width: '300px', height: '200px', marginRight: '5px' }}
            />
            <p>Name: {country.name?.common || 'N/A'}</p>
            {selectedCountry === country && (
              <div>
                <p>Capital: {country.capital?.[0] || 'N/A'}</p>
                <p>Population: {country.population || 'N/A'}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No country data available</p>
      )}
    </div>
  );
};

export default Country;
