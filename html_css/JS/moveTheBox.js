const myCanvas = document.getElementById('myCanvas');
const square = document.getElementById('myCanvas');

let context = myCanvas.getContext('2d')
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height = window.innerHeight;


let sqrContext = square.getContext('2d')

let x=450, y=200

function draw(){
  
  // Canvas Background
  context.beginPath()
  context.fillStyle = "rgb(238, 24, 95)";
  context.fillRect(0, 0, width, height);
  
  // Square
  context.beginPath()
  context.fillStyle = "#000"
  context.fillRect(x, y, 50, 50)
  
  // Circle
  context.beginPath()
  context.arc(100, y, 70, 0, 2 * Math.PI);
  context.fillStyle = 'rgba(55,255,21,0.4)';
  context.fill()
  
  x +=1;
  y +=1;
  
  requestAnimationFrame(draw)
}

draw()
