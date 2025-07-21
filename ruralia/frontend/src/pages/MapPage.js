import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

// Fix icona di default Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapPage() {
  const [pois, setPois] = useState([]);
  const center = [41.2006, 16.5992]; // Molfetta

  useEffect(() => {
    axios.get('http://localhost:3001/api/pois')
      .then(response => {
        console.log("Dati ricevuti:", response.data);
        setPois(response.data);
      })
      .catch(error => {
        console.error('Errore nel recupero dei POI:', error);
      });
  }, []);

  const isValidLatLng = (lat, lon) => {
    const latNum = parseFloat(lat);
    const lonNum = parseFloat(lon);
    return !isNaN(latNum) && !isNaN(lonNum);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{ height: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {pois
          .filter(poi => isValidLatLng(poi.lat, poi.lon))
          .map((poi) => (
            <Marker
              position={[parseFloat(poi.lat), parseFloat(poi.lon)]}
              key={poi.id}
            >
              <Popup>
                <strong>{poi.nome}</strong><br />
                {poi.descrizione}<br />
                {poi.via}, {poi.comune}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

export default MapPage;
