import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import DriverMarker from './DriverMarker';

const MapComponent = ({ drivers }) => {
  const mapCenter = [22.7533, 75.8937];
  

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: '800px', width: '100%' }}>
       <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

      {drivers.map((driver) => (
        <DriverMarker key={driver.id} driver={driver} />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
