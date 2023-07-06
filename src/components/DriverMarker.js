import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const DriverMarker = ({ driver }) => {
    const icon = L.icon({
        iconUrl: 'images/location.png',
        iconSize: [32, 32],
      });
  return (
    <Marker position={[driver.latitude, driver.longitude]} icon={icon}>
      <Popup>
        Driver: {driver.name}<br />
        Location: {driver.latitude}, {driver.longitude}
      </Popup>
    </Marker>
  );
};

export default DriverMarker;
