// copywrite 2021 Patrick Farrell
// created: 2021-10-30
// colors from coolors.com https://coolors.co/4cc9f0-faf09b-cfc891-c4085a-c9c385-4898b0-e8106e

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function animate(draw_func, fps) {
  window.setTimeout(() => {
        requestAnimationFrame(draw_func);
  }, 1000 / fps);
}

function drawDiamond() {
  ctx.beginPath();
  
  for(let i=0; i<=lines; i++) {
    ctx.moveTo(0,0);
    ctx.moveTo(lines*scale*i, 0);
    ctx.lineTo(0, lines*scale*(lines-i));
  }
  for(let i=0; i<=lines; i++) {
    ctx.moveTo(0,0);
    ctx.moveTo(-1*scale*lines*i, 0);
    ctx.lineTo(0, -1*scale*lines*(lines-i));
  }
  for(let i=0; i<=lines; i++) {
    ctx.moveTo(0,0);
    ctx.moveTo(1*scale*lines*i, 0);
    ctx.lineTo(0, -1*scale*lines*(lines-i));
  }
  for(let i=0; i<=lines; i++) {
    ctx.moveTo(0,0);
    ctx.moveTo(-1*scale*lines*i, 0);
    ctx.lineTo(0, lines*scale*(lines-i));
  }
  ctx.stroke();
  ctx.closePath();
}


function draw() {
  if(!active) { return; }
  time += 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colors['green'];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = colors['black'];
  for(let i=1; i<diamonds; i++) {
    ctx.save();
    ex = Math.random();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(i/diamonds*time*Math.PI/180);
    drawDiamond();
    ctx.restore();
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(-1*i/diamonds*time*Math.PI/180);
    drawDiamond();
    ctx.restore();
  }
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var lines = 15;
let time = 0;
let scale = 1.4;
let diamonds = 8
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setInterval(draw, 80)
