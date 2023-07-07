import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ControlPanel = ({ drivers }) => {
  const [locationNames, setLocationNames] = useState({});

  useEffect(() => {
    const fetchLocationNames = async () => {
      const promises = drivers.map((driver) =>
        axios
          .get(`https://nominatim.openstreetmap.org/reverse?lat=${driver.latitude}&lon=${driver.longitude}&format=json`)
          .then((response) => ({
            driverId: driver.id,
            locationName: response.data.display_name
          }))
      );

      const results = await Promise.all(promises);
      const locationNameMap = results.reduce((map, result) => {
        map[result.driverId] = result.locationName;
        return map;
      }, {});

      setLocationNames(locationNameMap);
    };

    fetchLocationNames();
  }, [drivers]);

  return (
    <div className="control-panel">
      <h2>Driver Control Panel</h2>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>
            Driver: {driver.name}<br />
            Location: {driver.latitude}, {driver.longitude}<br />
            Location Name: {locationNames[driver.id]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ControlPanel;
