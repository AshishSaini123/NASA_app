import React from 'react';

import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';
import Asteroid from './components/scripts/inputAsteroid';
import InputField from './components/scripts/inputForm';
import RandomAsteroid from './components/scripts/randomAsteroid';

function App() {
  return (
    <div className="App">
      {/* <InputField /> */}
      {/* <Asteroid /> */}
      {/* <RandomAsteroid /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
