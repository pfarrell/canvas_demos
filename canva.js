function drawShape(ctx, arrayPairs) {
  ctx.beginPath();
  ctx.fillStyle = 'blue';
  for(const pair of arrayPairs) {
    ctx.lineTo(pair[0], pair[1]);
  }
  ctx.closePath();
  ctx.fill();
}

function drawPoly(ctx, sides, size, xcen, ycen) {

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo (xcen +  size * Math.cos(0), ycen +  size *  Math.sin(0));

  for (var i = 1; i <= sides;i += 1) {
      ctx.lineTo (xcen + size * Math.cos(i * 2 * Math.PI / sides), ycen + size * Math.sin(i * 2 * Math.PI / sides));
  }
  ctx.closePath();
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fill();
}

var d = 1;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function init() {
  window.requestAnimationFrame(draw);
}

async function draw() {
  d += 1;
  console.log('draw');
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  //ctx.clearRect(0, 0,window.innerWidth, window.innerHeight);

  // Draw yellow background
  ctx.beginPath();
  ctx.fillStyle = '#ff6';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for(let i=8; i<=8; i++) {
    ctx.translate(500, 165);
    ctx.rotate(d*.01);
    ctx.translate(-500, -165);
    drawPoly(ctx, i, 150, 500, 165);
  }  
  //function init() {
  //await sleep(.01)
  window.requestAnimationFrame(draw);
}
// Clear part of the canvas
// ctx.clearRect(10, 10, 120, 100);
init();
