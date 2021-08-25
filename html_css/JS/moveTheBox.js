const myCanvas = document.getElementById('myCanvas');

let context = myCanvas.getContext('2d')
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height = window.innerHeight;

let sqrX = 450, sqrY = 200
let crlX = 450, crlY = 200
let SPEED = 1
let VELOCITY_X = 0, VELOCITY_Y = 0;

document.addEventListener('keydown', (evt) => {

  if (evt.key === "ArrowUp") {
    VELOCITY_Y -= SPEED
  }
  if (evt.key === "ArrowDown") {
    VELOCITY_Y += SPEED
  }
  if (evt.key === "ArrowRight") {
    VELOCITY_X += SPEED
  }
  if (evt.key === "ArrowLeft") {
    VELOCITY_X -= SPEED
  }
  
  switch (evt.key){
    case "w":
    crlY -= SPEED
    break;
    case "s":
    crlY += SPEED
    break;
    case "d":
    crlX += SPEED
    break;
    case "a":
    crlX -= SPEED
    break;
  }
  

  console.log('Key Down :>> ', evt);
})

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


  sqrX += VELOCITY_X;
  sqrY += VELOCITY_Y;
  
  // *Automatic Decelerating
 VELOCITY_X *= .97
 VELOCITY_Y *= .97

  // crlX += .3;
  // crlY += .1;

  requestAnimationFrame(draw)
}

draw()
