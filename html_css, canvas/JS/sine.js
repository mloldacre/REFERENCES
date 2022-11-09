const myCanvas = document.getElementById('myCanvas');
let context = myCanvas.getContext('2d')
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height = window.innerHeight;

context.translate(width / 3, height / 2)

// for (let angle = 0; angle < Math.PI * 2; angle += .001) {
//   let x = Math.cos(angle) * 360,
//     y = Math.sin(angle) * 360

//   context.fillRect(x, y, 8, 2)
// }
let radius = 90
let angle = 0
setInterval(() => {
  let x = Math.cos(angle) * radius,
    y = Math.sin(angle) * radius

  context.fillRect(x, y, 8, 2)
  angle += .01
  radius -= .01
}, .000001);