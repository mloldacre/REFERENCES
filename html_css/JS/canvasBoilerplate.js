const myCanvas = document.getElementById('myCanvas');
let context = myCanvas.getContext('2d')
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height = window.innerHeight;

// context.fillRect(0, 0, width, height);

//* Creates random lines
for (let i = 0; i < 100; i++){
  context.beginPath();
  context.moveTo(Math.random() * width, Math.random() * height);
  context.lineTo(Math.random() * width, Math.random() * height);
  context.stroke();
}
