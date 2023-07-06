import React from 'react';
import MapContainer from './components/MapContainer';
import ControlPanel from './components/ControlPanel';

const App = () => {
  const drivers = [
    { id: 1, name: 'Driver 1', latitude: 22.7533, longitude: 75.8937 },
    { id: 2, name: 'Driver 2', latitude: 22.7571, longitude: 75.8822 },
    { id: 3, name: 'Driver 3', latitude: 22.7196, longitude: 75.8577 },
    { id: 4, name: 'Driver 4', latitude: 22.7206, longitude: 75.8589 },
    { id: 5, name: 'Driver 5', latitude: 22.7203, longitude: 75.8691 },

    // Add more driver data as needed
  ];

  return (
    <div>
      <MapContainer drivers={drivers} />
      <ControlPanel drivers={drivers} />
    </div>
  );
};

export default App;
