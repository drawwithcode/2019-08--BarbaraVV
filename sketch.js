var myMap; // variable of the map
var myCanvas; // variable of the canvas

var mappa = new Mappa("Leaflet"); // use Leaflet for the map

var myLat; // user's latitude
var myLon; // user's longitude

var position; // user's position

// variables of the images on Google Maps
var pigeonLat = 35.7040744;
var pigeonLon = 139.5577317;
var guglielmoLat = 41.4376761;
var guglielmoLon = -72.7526586;
var horseLat = 48.3732489;
var horseLon = -123.5868739;
var seaweedLat = 32.7685482;
var seaweedLon = -117.2527024;
var aliceLat = 50.051921;
var aliceLon = -119.399556;
var winnieLat = -77.8237809;
var winnieLon = 166.7096832;
var dudesLat = 59.3456029;
var dudesLon = 18.1111513;

function preload() {

  position = getCurrentPosition();

}

var options = {

  lat: 0, // initial latitude
  lng: 0, // initial longitude
  zoom: 6, // initial zoom level
  style: "http://tile.stamen.com/toner/{z}/{x}/{y}.png" // map (credits in the index.html)

}

function setup() {

  myCanvas = createCanvas(windowWidth, windowHeight);

  myLat = position.latitude;
  myLon = position.longitude;

  options.lat = myLat;
  options.lng = myLon;

  // show the map
  myMap = mappa.tileMap(options);
  myMap.overlay(myCanvas);

  createElement("h1", "Do you think you are STRANGE? Look for STRANGER people around the world!");



}

function draw() {

  clear();

  // ellipse that indicates the user's position
  push();
  var myPosition = myMap.latLngToPixel(myLat, myLon); // pixel position of the user's latitude and longitude
  fill("blue");
  ellipse(myPosition.x, myPosition.y, 20);
  pop();

  // ellipses that indicate the positions of the images on Google Maps
  push();
  var pigeon = myMap.latLngToPixel(pigeonLat, pigeonLon); // pixel position of the latitude and longitude of the image
  fill("yellow");
  ellipse(pigeon.x, pigeon.y, 20);
  var pigeonDist = dist(mouseX, mouseY, pigeon.x, pigeon.y);
  if (pigeonDist < 20) {
    fill("red");
    ellipse(pigeon.x, pigeon.y, 20);
    window.open("https://www.google.com/maps/@35.7040744,139.5577317,3a,73.7y,280.71h,67.52t/data=!3m6!1e1!3m4!1sgT28ssf0BB2LxZ63JNcL1w!2e0!7i13312!8i6656"); // open Google Maps
  }
  pop();

  push();
  var guglielmo = myMap.latLngToPixel(guglielmoLat, guglielmoLon); // pixel position of the latitude and longitude of the image
  fill("yellow");
  ellipse(guglielmo.x, guglielmo.y, 20);
  var guglielmoDist = dist(mouseX, mouseY, guglielmo.x, guglielmo.y);
  if (guglielmoDist < 20) {
    fill("red");
    ellipse(guglielmo.x, guglielmo.y, 20);
    window.open("https://www.google.com/maps/@41.4376761,-72.7526586,3a,37.5y,133.22h,88.25t/data=!3m6!1e1!3m4!1spGbi2whQNBCsueRcAsdIPg!2e0!7i13312!8i6656"); // open Google Maps
  }
  pop();

  push();
  var horse = myMap.latLngToPixel(horseLat, horseLon); // pixel position of the latitude and longitude of the image
  fill("yellow");
  ellipse(horse.x, horse.y, 20);
  var horseDist = dist(mouseX, mouseY, horse.x, horse.y);
  if (horseDist < 20) {
    fill("red");
    ellipse(horse.x, horse.y, 20);
    window.open("https://www.google.com/maps/place/1340+Liberty+Dr,+Victoria,+British+Columbia/@48.3732489,-123.5868739,3a,75y,180.11h,69.79t/data=!3m7!1e1!3m4!1sQBjl4XW3gK09XWq_mje_kw!2e0!7i13312!8i6656!4b1!4m2!3m1!1s0x548f0ed76a28fdc1:0x2264a366056a5963"); // open Google Maps
  }
  pop();

  push();
  var seaweed = myMap.latLngToPixel(seaweedLat, seaweedLon); // pixel position of the latitude and longitude of the image
  fill("yellow");
  ellipse(seaweed.x, seaweed.y, 20);
  var seaweedDist = dist(mouseX, mouseY, seaweed.x, seaweed.y);
  if (seaweedDist < 20) {
    fill("red");
    ellipse(seaweed.x, seaweed.y, 20);
    window.open("https://www.google.com/maps/@32.7685482,-117.2527024,3a,48y,1.19h,73.16t/data=!3m6!1e1!3m4!1sJOsk-cy38_faGM6Mgb7kug!2e0!7i13312!8i6656"); // open Google Maps
  }
  pop();

  push();
  var alice = myMap.latLngToPixel(aliceLat, aliceLon); // pixel position of the latitude and longitude of the image
  fill("yellow");
  ellipse(alice.x, alice.y, 20);
  var aliceDist = dist(mouseX, mouseY, alice.x, alice.y);
  if (aliceDist < 20) {
    fill("red");
    ellipse(alice.x, alice.y, 20);
    window.open("https://www.google.ca/maps/@50.051921,-119.399556,3a,75y,229.38h,74.23t/data=!3m7!1e1!3m5!1stOpaGEL9zNQAAAAGOunRCg!2e0!3e11!7i8000!8i4000"); // open Google Maps
  }
  pop();

  push();
  var winnie = myMap.latLngToPixel(winnieLat, winnieLon); // pixel position of the latitude and longitude of the image
  fill("yellow");
  ellipse(winnie.x, winnie.y, 20);
  var winnieDist = dist(mouseX, mouseY, winnie.x, winnie.y);
  if (winnieDist < 20) {
    fill("red");
    ellipse(winnie.x, winnie.y, 20);
    window.open("https://www.google.com/maps/@-77.8237809,166.7096832,3a,75y,48.32h,74.26t/data=!3m6!1e1!3m4!1sHAOCH6FZKh6Hi1NQef1pgw!2e0!7i13312!8i6656?hl=it"); // open Google Maps
  }
  pop();

  push();
  var dudes = myMap.latLngToPixel(dudesLat, dudesLon); // pixel position of the latitude and longitude of the image
  fill("yellow");
  ellipse(dudes.x, dudes.y, 20);
  var dudesDist = dist(mouseX, mouseY, dudes.x, dudes.y);
  if (dudesDist < 20) {
    fill("red");
    ellipse(dudes.x, dudes.y, 20);
    window.open("https://www.google.com/maps/@59.3456029,18.1111513,3a,37.5y,47.27h,80.61t/data=!3m6!1e1!3m4!1sUw85YKXgWWKIqpfXQ_-Z0A!2e0!7i13312!8i6656?hl=en"); // open Google Maps
  }
  pop();

}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
