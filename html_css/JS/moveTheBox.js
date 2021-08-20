const myCanvas = document.getElementById('myCanvas');

let context = myCanvas.getContext('2d')
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height = window.innerHeight;

let sqrX = 450, sqrY = 200
let crlX = 450, crlY = 200

function draw() {

  // Canvas Background
  context.beginPath()
  context.fillStyle = "rgb(238, 24, 95)";
  context.fillRect(0, 0, width, height);

  // Square
  context.beginPath()
  context.fillStyle = "#000"
  context.fillRect(sqrX, sqrY, 50, 50)

  // Circle
  context.beginPath()
  context.arc(crlX, crlY, 70, 0, 2 * Math.PI);
  context.fillStyle = 'rgba(55,255,21,0.4)';
  context.fill()

  sqrX += .2;
  sqrY += .11;

  crlX += .3;
  crlY += .1;

  requestAnimationFrame(draw)
}

draw()
