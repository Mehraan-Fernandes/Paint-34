var hue;
var database; 
var paintBrushStroke;

function setup() {
createCanvas(900,400)
background(0)

database=firebase.database();
var refCirclePosition = database.ref('circle/position');
refCirclePosition.on('value',readPosition,showError)
hue=60
}

function draw() {}

function mouseDragged() {
colorMode(HSL,360)
noStroke();
fill(hue,300,200)
paintBrushStroke = ellipse(mouseX, mouseY, 25);
}


function keyPressed(){
  //CLEARING THE BACKGROUND
    if(keyCode==32){
    background(0)
    }
  //RED
    if(keyCode == 82){
      hue=360
    }
  //GREEN
    if(keyCode == 71){
      hue=125
    }
  //BLUE
    if(keyCode == 66){
      hue=208
    }
  //YELLOW
    if(keyCode == 89){
      hue=60
    }
  //VIOLET
    if(keyCode == 86){
      hue=285
    }
  //PINK
    if(keyCode == 80){
      hue=310
    }
  //INDIGO
    if(keyCode == 73){
      hue=255
    }
  //ORANGE
    if(keyCode == 79){
      hue=30
    }
}

function writePosition(x, y) {
  database.ref('circle/position').set({
      'x': mouseX,
      'y': mouseY,

  });
}

function readPosition(data){
  position = data.val();
  paintBrushStroke.x = mouseX.position
  paintBrushStroke.y = mouseY.position
}

function showError() {
  console.log("data error") 
}