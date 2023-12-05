import React, { useEffect, useState } from 'react';
import Country from './Country';

const CountryApp = () => {
  const [countryData, setCountryData] = useState([]);
  const [continentList, setContinentList] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState('');

  useEffect(() => {
    const getAllContinents = async () => {
      const continentEndpoints = [
        'https://restcountries.com/v3.1/region/africa',
        'https://restcountries.com/v3.1/region/asia',
        'https://restcountries.com/v3.1/region/europe',
      ];

      const continentData = await Promise.all(
        continentEndpoints.map(async (endpoint) => {
          const response = await fetch(endpoint);
          return await response.json();
        })
      );

      const uniqueContinents = continentData.map((countries) => countries[0]?.region);
      setContinentList(uniqueContinents);
    };

    getAllContinents();
  }, []);

  const handleContinentSelection = async () => {
    const desiredContinents = ['africa', 'asia', 'europe'];

    if (desiredContinents.includes(selectedContinent)) {
      const response = await fetch(`https://restcountries.com/v3.1/region/${selectedContinent}`);
       
        const json = await response.json();
        setCountryData(json);
      
    }
  };

  return (
    <div>
      <select
        id="chooseContinent"
        onChange={(e) => setSelectedContinent(e.target.value)}
        value={selectedContinent}
      >
        <option value="">Continent</option>
        {continentList.map((continent, i) => (
          <option value={continent.toLowerCase()} key={i}>
            {continent}
          </option>
        ))}
      </select>
      <button onClick={handleContinentSelection}>Countries for the selected continent</button>
      {countryData.length > 0 && <Country data={countryData} />}
    </div>
  );
};

export default CountryApp;
