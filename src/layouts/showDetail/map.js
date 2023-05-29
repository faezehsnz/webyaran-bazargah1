import React from "react";
import { MapContainer, TileLayer, Marker ,Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css';
// import "./styles.scss";

export default function Map() {
    const position = [51.505, -0.09]
  return (
    <div > 
    <MapContainer
    style={{width:'40vw' ,height:'30vh'}}
    center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
