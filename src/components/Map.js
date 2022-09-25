import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet'
import { PropTypes } from 'prop-types';

import '../styles/App.scss';

function Map({ fetchedData }){
    if(fetchedData === null){
        return null;
    }
    return(
        <main className="map-container" id='map'>
        <MapContainer center={[fetchedData.location.lat,fetchedData.location.lng]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMapView fetchedData={fetchedData}/>
            <Marker position={[fetchedData.location.lat,fetchedData.location.lng]}>
                <Popup>
                {fetchedData.isp}
                </Popup>
            </Marker>
        </MapContainer>  
        </main>
    );
}

function ChangeMapView({ fetchedData }) {
    const map = useMap();
    map.setView([fetchedData.location.lat, fetchedData.location.lng], map.getZoom());
  
    return null;
}

Map.propTypes = {
    fetchedData: PropTypes.object
}

ChangeMapView.propTypes = {
    fetchedData: PropTypes.object
}

export default Map;