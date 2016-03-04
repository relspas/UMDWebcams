var map;
var openedInfoWindow = null;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.987200, lng: -76.942765},
    zoom: 16
  });

  //Add text to main Webcam page
  addMainBoxText();

  //loops through all of webcams stored in webcamlist javascript array
  for(var i = 0; i < cameras.length; i++){
    var camera = cameras[i];
    if(camera[4] === 'unsecured'){
      makeMarker(camera, 'survcam_green.png');  
    }else{
      makeMarker(camera, 'survcam_red.png');
    }
    
  }

  //Webcams without location and Story
  var marker = new google.maps.Marker({
    position: {lat: unknownLocationCameras[2], 
    lng: unknownLocationCameras[3]},
    map: map,
    icon: {url: 'questionmark4.png', 
      anchor: new google.maps.Point(25, 25)},
    title: unknownLocationCameras[0]
  });
  
  //Not using functions described below because this marker acts differently
  var infowindow = new google.maps.InfoWindow({
    content: unknownLocationCameras[1],
    maxWidth: 300
    //Could add max height later
  });
  //Open storywindow upon loading the page and intialize first use settings
  infowindow.open(map, marker);
  openedInfoWindow = infowindow;
  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  //this code is for everytime besides the first time, the story window is
  //opened.
  google.maps.event.addListener(marker, "click", function(){
    //closes last opened info window
    if (openedInfoWindow != null) {
      openedInfoWindow.close();
    };
    //opens new info window (Ver. 1&2 just have this)
    infowindow.open(map, marker);
    //update current info window
    openedInfoWindow = infowindow;
    //let program know that there are no opened windows after one is closed
    google.maps.event.addListener(infowindow, 'closeclick', function() {
      openedInfoWindow = null;
    });
    //closes info window when map is pressed
    google.maps.event.addListener(map, 'click', function() {
      infowindow.close();
    });

  });

}

function makeMarker(dataArr, image){
  var marker = new google.maps.Marker({
    position: {lat: dataArr[2], 
    lng: dataArr[3]},
    map: map,
    icon: {url: image, anchor: new google.maps.Point(25, 25)},
    title: dataArr[0]
  });
  var contentString = dataArr[0] + '<br/>' + 
    dataArr[1];
  attachMessage(marker,contentString);
}

//attaches message argument to marker argument
function attachMessage(marker, message) {
  var infowindow = new google.maps.InfoWindow({
    content: message,
    maxWidth: 330
  });

  google.maps.event.addListener(marker, "click", function(){
    //closes last opened info window
    if (openedInfoWindow != null){
      openedInfoWindow.close();
    };
    //opens new info window (Ver. 1&2 just have this)
    infowindow.open(map, marker);
    //update current info window
    openedInfoWindow = infowindow;
    //let program know that there are no opened windows after one is closed
    google.maps.event.addListener(infowindow, 'closeclick', function() {
      openedInfoWindow = null;
    });
    //closes info window when map is pressed
    google.maps.event.addListener(map, 'click', function() {
      infowindow.close();
    });

  });

}

function addMainBoxText() {
  var myTitle = document.createElement('h1');
  myTitle.style.color = 'black';
  myTitle.style.fontSize = 'medium';
  myTitle.innerHTML = 'UMD Campus Webcams '+
  '- Click a camera to begin - Updated 2/22/2016';
  var myTextDiv = document.createElement('div');
  myTextDiv.appendChild(myTitle);
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(myTextDiv);
}