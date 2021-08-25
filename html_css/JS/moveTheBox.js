const myCanvas = document.getElementById('myCanvas');

let context = myCanvas.getContext('2d')
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height = window.innerHeight;

let sqrX = 450, sqrY = 200
let pltX = 600, pltY = 600
let pltWIDTH = 200, pltHEIGHT = 10
let sqrWIDTH = 50, sqrHEIGHT = 50
let crlX = 10, crlY = 10
let SPEED = 1
let VELOCITY_X = 0, VELOCITY_Y = 0;
let GRAVITY = 1;
let PLTCOLLISION = false;
let GRNDCOLLISION = false;
//Direction Vector
let DIRECTION = {
  x: 0,
  y: 0
}

document.addEventListener('keydown', (evt) => {

  // if (evt.key === "ArrowUp") {
  //   DIRECTION.y = -1;
  // }
  // if (evt.key === "ArrowDown") {
  //   DIRECTION.y = 1;
  // }
  if (evt.key === "ArrowRight") {
    DIRECTION.x = 1;
  }
  if (evt.key === "ArrowLeft") {
    DIRECTION.x = -1;
  }
  if(evt.key == " ")
  {
    VELOCITY_Y -= 30;
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
document.addEventListener('keyup', (evt) => {

  // if (evt.key === "ArrowUp") {
  //   DIRECTION.y = 0;
  // }
  // if (evt.key === "ArrowDown") {
  //   DIRECTION.y = 0;
  // }
  if (evt.key === "ArrowRight") {
    DIRECTION.x = 0;
  }
  if (evt.key === "ArrowLeft") {
    DIRECTION.x = 0;
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
  

  console.log('Key UP :>> ', evt);
})

function draw() {

  // Canvas Background
  context.beginPath()
  context.fillStyle = "rgb(238, 24, 95)";
  context.fillRect(0, 0, width, height);

  // Square
  context.beginPath()
  context.fillStyle = "#000"
  context.fillRect(sqrX, sqrY, sqrWIDTH, sqrHEIGHT)
  
  // Platform
  context.beginPath()
  context.fillStyle = "#EE5846"
  context.fillRect(pltX, pltY, pltWIDTH, pltHEIGHT)

  // Circle 'sun'
  context.beginPath()
  context.arc(crlX, crlY, 70, 0, 2 * Math.PI);
  context.fillStyle = 'rgba(55,255,21,0.4)';
  context.fill()

  //Add Velocity Based on direction
  VELOCITY_X += (DIRECTION.x * SPEED)
  VELOCITY_Y += (GRAVITY * SPEED)
  //Apply Velocity to box;
  sqrX += (VELOCITY_X);
  sqrY += (VELOCITY_Y);
  
  // *Automatic Decelerating
 VELOCITY_X *= .97
 VELOCITY_Y *= .97

  // crlX += .3;
  // crlY += .1;
  
  // * Boundaries
  if (sqrX > width){
    sqrX = 1
  } else if (sqrX <= -50){
    sqrX = (width - 1)
  }
  
  //*:) This one
  if (sqrY > height - 50){
    //*:) this stuff
    sqrY = height - 50;
    GRNDCOLLISION = true;
    GRAVITY = 0;
    VELOCITY_Y = 0;
  }
  else if(!PLTCOLLISION)
  {
    GRAVITY = 1;
  }
  else
  {
    GRNDCOLLISION = false;
  }
  //else if (sqrY <= 0){
  //   sqrY = (height - 1)
  // }
  
  // Platform Physics 🤷🏾‍♂️
  if ((sqrX > (pltX - (sqrWIDTH - 5 ))) && (sqrX < (pltWIDTH + pltX))){
    if(sqrY + 50 >= pltY && sqrY < pltY+pltHEIGHT)
    {
      PLTCOLLISION = true;
      sqrY = pltY - 50;
      GRAVITY = 0;
      VELOCITY_Y = 0;
    }
    else if(!GRNDCOLLISION)
    {
      GRAVITY = 1;
    }
    else
    {
      PLTCOLLISION = false;
    }
  }
  else if(!GRNDCOLLISION)
  {
    GRAVITY = 1;
  }
  else
  {
    PLTCOLLISION = false;
  }
  requestAnimationFrame(draw)
}

draw()
