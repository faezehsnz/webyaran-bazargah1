import React from "react";
import { MapContainer, TileLayer, Marker ,Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css';
import marker from '../../assets/images/icons/placeholder.png'
// import "./styles.scss";
import { Icon } from 'leaflet'

export default function Map() {
    const position = [32.6539, 51.6660]
    const myIcon = new Icon({
      iconUrl: marker,
      iconSize: [32,32],
     })
  return (
    <div > 
    <MapContainer
    style={{height:'40vh' , margin:20}}
    center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          hey
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
