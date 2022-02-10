import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Button } from 'react-bootstrap';
import Marker from './Marker';
import LocationPin from './LocationPin';
import { lat, lng, address } from '../utility/geolacation';

const Home = () => {
  const customStyles = {
    button: {
      position: 'absolute',
      left: '-45vw',
      top: '-45vh',
    },
  };

  const [coord, setCoord] = useState({});
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    setCoord({ latitude: lat, longitude: lng });
  }, [coord.latitude, coord.longitude]);

  const handleCoordinates = () => {
    setCardVisible(true);
  };

  let mapOptions = {
    center: { lat: coord.latitude, lng: coord.longitude },
    defaultZoom: 3.5,
    zoom: 12,
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false,
    scaleControl: false,
    zoomControlOptions: false,
    scrollwheel: false,
    panControl: false,
  };

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.MAP_API_KEY,
          }}
          defaultZoom={mapOptions.zoom}
          center={[coord.latitude, coord.longitude]}
          zoom={cardVisible ? mapOptions.zoom : mapOptions.defaultZoom}
          options={mapOptions}
          onChildClick={() => {
            setCoord({
              latitude: coord.latitude,
              longitude: coord.longitude,
            });
          }}
        >
          <Button
            variant="light"
            className="button"
            style={customStyles.button}
            onClick={handleCoordinates}
          >
            Find me
          </Button>
          {cardVisible && <LocationPin />}
          {cardVisible && (
            <Marker
              lat={coord.latitude + 0.008}
              lng={coord.longitude + 0.01}
              text={address}
            />
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Home;
