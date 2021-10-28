function drawPoly(ctx, sides, size, xcen, ycen) {
  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.moveTo (xcen +  size * Math.cos(0), ycen +  size *  Math.sin(0));
  for (var i = 1; i <= sides;i += 1) {
      ctx.lineTo (xcen + size * Math.cos(i * 2 * Math.PI / sides), ycen + size * Math.sin(i * 2 * Math.PI / sides));
  }
  ctx.closePath();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fill();
  //ctx.moveTo (xcen +  size * Math.cos(0), ycen +  size *  Math.sin(0));
  //ctx.arc(xcen, ycen, size, 0, 2*Math.PI);
  //ctx.stroke();
}

var d = 1;
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function init() {
  window.requestAnimationFrame(draw);
}

function draw() {
  ctx.clearRect(0, 0,window.innerWidth, window.innerHeight);

  // Draw yellow background
  ctx.beginPath();
  ctx.fillStyle = '#ff6';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  sides = 8;
  ctx.translate(500, 165);
  ctx.rotate(-2*Math.PI / 180);
  ctx.translate(-500, -165);
  drawPoly(ctx, sides, 50, 500, 165);
  window.requestAnimationFrame(draw);
}
draw();
