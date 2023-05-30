import React from "react";
import { MapContainer, TileLayer, Marker ,Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css';
// import "./styles.scss";

export default function Map() {
    const position = [32.6539, 51.6660]
  return (
    <div > 
    <MapContainer
    style={{width:'35vw' ,height:'50vh'}}
    center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          hey
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
