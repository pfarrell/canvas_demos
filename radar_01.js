// copywrite 2021 Patrick Farrell
// created: 2021-11-02

let Blip = class {
  constructor(rot, rad, intensity) {
    this.rot = rot;
    this.rad = rad;
    this.intensity = intensity;
  }
}


function draw() {
  t += 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colors['black'];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(cenX, cenY);
  drawScreen();
  drawSweep(t);
  drawBlips(t);
  ctx.restore();
}

function drawScreen() {
  ctx.beginPath();
  ctx.strokeStyle = colors['green'];
  ctx.arc(0, 0, screenRad, 0, 2*Math.PI);
  ctx.stroke();
  ctx.closePath();
}

function getRotation(t) {
  return (t*.08*Math.PI/180) % 2*Math.PI;
}

function drawSweep(t) {
  ctx.save();
  ctx.strokeStyle=colors['green'];
  ctx.beginPath();
  rotation = getRotation(t);
  ctx.rotate(rotation);
  ctx.moveTo(0,0);
  ctx.lineWidth=3;
  ctx.lineTo(0,screenRad);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function drawBlips(t) {
  rotation = getRotation(t);
  ctx.save();
  for(const blip of blips) {
    dist = rotation - blip.rot;
    if(dist < .3 && dist > 0) {
      ctx.save();
      ctx.rotate(blip.rot);
      ctx.beginPath();
      ctx.fillStyle = colors['green'];  
      ctx.arc(0, blip.rad, 5, 0, 2*Math.PI);  
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
  }
  ctx.restore();
}

function randomFloat(max) {
  return Math.random()*max;
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cenX = Math.floor(canvas.width/2);
var cenY = Math.floor(canvas.height/2);
var t = 0;
var screenRad = 350;
var rad = Math.floor(canvas.height/PHI)
var blips = [];
for(let i = 0; i<10; i++) {
  blips.push(new Blip(randomFloat(2*Math.PI), randomPosInt(screenRad), 5));
}

setInterval(draw, 1);
