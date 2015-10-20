function initMap() {
 var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 16.510252, lng: 80.6444612}
  });
 map.setOptions({ minZoom: 17, maxZoom: 17});
  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

}

function geocodeAddress(geocoder, resultsMap)
{
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
    	var lat;
    	var lng;
    	lat=results[0].geometry.location.lat();
    	lng=results[0].geometry.location.lng();
    	//console.log(loc);
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
      console.log(lat);
      console.log(lng);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}