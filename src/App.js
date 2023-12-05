
import Country from './Country.jsx';
import CountryApp from './CountryApp.jsx';
import { useState } from 'react';



export default function App() {
  let [showApp, setShowApp] = useState(false)
  return (
    <div className="App">
      <h2>Countries</h2>
      <button onClick={()=> {
        setShowApp(true);
        
      }}>Search Countries </button>
       {showApp && <CountryApp/>}
    </div>
   
  );
}


