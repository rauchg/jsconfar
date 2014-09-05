document.addEventListener('DOMContentLoaded', function(){

  // Track when the users subscribe to the newsletter
  var signupForms = document.querySelectorAll('form.signup-form');
  for(var i in signupForms) {
    signupForms[i].onsubmit = function(event){
      ga( 'send', 'event', 'newsletter', 'signup' );
    };
  }

});


// Google Maps
function initialize_map() {

  var place = new google.maps.LatLng(-34.585595, -58.393225);

  var map = new google.maps.Map(document.getElementById("map-holder"), {
    center: place,
    zoom: 16,
    scrollwheel: false,
    draggable: true,
    scaleControl: true,
    navigationControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position: place,
    icon: {
      url: "styles/images/sprite.png", 
      size: new google.maps.Size(53, 58), 
      anchor: new google.maps.Point(27, 58),
      origin: new google.maps.Point(230, 0),
      scaledSize: new google.maps.Size(500, 250)
    },
    map: map
  });

  // Keep it centered on resize
  window.onresize = function(){
    google.maps.event.trigger(map, 'resize');
    map.setCenter(place);
  };

}


// Async Loading for the Maps API
function loadGoogleMaps() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = 1;
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initialize_map';
  document.body.appendChild(script);
}

window.onload = function(){
  loadGoogleMaps();
};