{
  let line = document.getElementById("canvasOne");
  let ctx = line.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
}

{
  let circle = document.getElementById("canvasTwo");
  let ctx = circle.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 50, 45, 0, 2 * Math.PI);
  ctx.fill();
}