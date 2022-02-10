import Geocode from 'react-geocode';

let lat = 0; // latitude
let lng = 0; //longitude
let address = 0;

(function () {
  if ('geolocation' in navigator) {
    console.log('Geolocation available');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        getAddress();
      },
      (error) => {
        console.error('Error code: ' + error.code + '-' + error.message);
      }
    );
  } else {
    console.log('Geolocation not Available');
  }
})();

const getAddress = () => {
  Geocode.setLanguage('en');
  Geocode.setLocationType('ROOFTOP');
  Geocode.setApiKey('AIzaSyC9tVfhWUYLvPdTpN1aO-BdD8cOTGq5HwM');
  Geocode.fromLatLng(lat, lng)
    .then((result) => {
      address = result.results[0].formatted_address;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { lat, lng, address };
