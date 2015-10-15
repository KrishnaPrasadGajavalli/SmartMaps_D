/**
 * 
 */
var latitude,longitude;
function getLocation() 
{
    if (navigator.geolocation) 
	{
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
	else 
	{ 
        document.writeln("Geolocation is not supported by this browser.");
    }
} 
function showPosition(position)
{
	latitude=position.coords.latitude;
	longitude=position.coords.longitude;
}
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 16.5060111, lng: 80.6640562}
  });
    getLocation();
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;
    if(window.addEventListener){
    window.addEventListener('load',function() {
    geocodeLatLng(geocoder, map, infowindow);
  });
    }
}

function geocodeLatLng(geocoder, map, infowindow) {
  var latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        map.setZoom(11);
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        infowindow.setContent(results[1].formatted_address);
        var city=results[1].formatted_address;
        var ct=city.split(",");
        var town=ct[1];
        console.log(town);
          //console.log(results[1].formatted_address);
        infowindow.open(map, marker);
          document.getElementById("user-location").value=town;
          } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
