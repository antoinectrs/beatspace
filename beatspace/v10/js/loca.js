const p = document.querySelector( '#location' );
let watchID;

//"lat 46.5371124 lon 6.5881351" OPEN SPACE
p.innerText = 'Je te cherche...';

const showPos = ( pos ) => {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;
  // console.log("lat "+lat+" lon "+lon);
  
  let distance = getDistanceFromLatLonInKm(lat,lon,46.5371124,6.5881351).toFixed(3);;
  console.log("distance "+ distance);
    //console.log("coord checks");
  // p.innerText = `Lat: ${lat} - Lon: ${lon}`;
  p.innerText = `je suis à: ${distance*1000} mètres de l'open space`;
}

const showErrors = ( error ) => {
  p.innerText = error.code == 1
                ? `Error! Denied access.`
                : `Je cherche encore...`;
}

const getUpdatedPos = ( ) => {
  if ( navigator.geolocation ) {
   
    const OPTIONS = { timeout : 1000};
    watchID = navigator.geolocation.watchPosition(
      showPos,
      showErrors,
      OPTIONS
    );
  } else {
    this.p.innerText = `
      geolocation dead
    `;
  }
}
const checkDistance = (pos) => {
    //console.log(pos.coords.latitude);
 //let distance = //getDistanceFromLatLonInKm(pos.coords.latitude,pos.coords.longitude,46.5371124,6.5881351).toFixed(1);
  // console.log("distance "+ distance);
}
document.addEventListener( 'load', getUpdatedPos( ) );

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}