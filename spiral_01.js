// copywrite 2021 Patrick Farrell
// created: 2021-10-31


function draw() {
  if(!active) { return; }
  t += 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colors['yellow'];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(Math.floor(canvas.width/2), Math.floor(canvas.height/2));
  ctx.rotate(t*Math.PI/180);
  ctx.strokeStyle = colors['blue'];
  ctx.beginPath();
  for (let i=0; i<50; i+=1) {
    ctx.lineTo(2*i, 0);
    ctx.stroke();
    ctx.translate(4*i, 0);
    ctx.rotate(90 * Math.PI / 180);
  }
  ctx.closePath();
  ctx.restore();
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let t = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setInterval(draw, 1);
