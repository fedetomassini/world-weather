import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../Radar/Radar.scss';
import 'leaflet/dist/leaflet.css';

const Radar = () => {

    document.querySelector("body").classList.add("radar");

    /* key... */
    const { lat, lon } = { lat: 30, lon: -20 };
    const layer = 'temp_new';
    const z = 5;

    const x = Math.floor(((lon + 180) / 360) * Math.pow(2, z));
    const y = Math.ceil(((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2) * Math.pow(2, z));

    return (
        <MapContainer center={{ lat, lng: lon }} zoom={5} scrollWheelZoom={false} style={{ height: '100vh' }}>
            <TileLayer
                url={`https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${API_KEY}`}
        	    attribution='<a href="http://openweathermap.org/" alt="World Map and worldwide Weather Forecast online">@OpenWeatherMap</a>'
        	    options={{
                    maxZoom: 18,
                    minZoom: 3,
                    tileSize: 256,
                    zoomOffset: -1
                }}
                noWrap={true}
            />
      </MapContainer>
    );
};

export default Radar;