console.log('The page is working!');

//Step 4. Socket connection on the client
let socket = io();
let r;
let g;
let b;
let size;

socket.on('connect', () => {
  console.log('Client connected');
});

//Step 8. Listen for data
socket.on('data', (data) => {
  console.log(data);

  fill(data.r, data.g, data.b);
  noStroke();
  ellipse(data.x, data.y, data.size);
});

//STEP 1. p5 setup
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
  r = random(255);
  g = random(255);
  b = random(255);
  size = random(50);
}

function mouseMoved(){
  // fill(0);
  // ellipse(mouseX, mouseY, 10);

  //Step 5. Emit client data
  let mousePos = {
    x: mouseX,
    y: mouseY,
    r: r,
    g: g,
    b: b,
    size: size
  }

  socket.emit('data', mousePos);
}
