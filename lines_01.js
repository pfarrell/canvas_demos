// copywrite 2021 Patrick Farrell
// created: 2021-10-30

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function animate(draw_func, fps) {
  window.setTimeout(() => {
        requestAnimationFrame(draw_func);
  }, 1000 / fps);
}

function draw() {
  if(!active) { return; }
  time +=1 ;
  ctx.save();
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colors['yellow'];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width/2, canvas.height/2);
  ctx.rotate(time*Math.PI/180);
  ctx.moveTo(0, 0); ctx.lineTo(0, 100);
  ctx.moveTo(0, 0); ctx.lineTo(50, 50);
  ctx.moveTo(0, 0); ctx.lineTo(0, -100);
  ctx.moveTo(0, 0); ctx.lineTo(-50, -50);
  ctx.moveTo(0, 0); ctx.lineTo(100, 0);
  ctx.moveTo(0, 0); ctx.lineTo(50, -50);
  ctx.moveTo(0, 0); ctx.lineTo(-100, 0);
  ctx.moveTo(0, 0); ctx.lineTo(-50, 50);
  ctx.stroke();
  ctx.fillStyle = colors['blue'];
  ctx.closePath();
  ctx.restore();
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var time = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setInterval(draw, 10)
