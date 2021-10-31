// copywrite 2021 Patrick Farrell
// created: 2021-10-29


class Position {
  constructor(xpos, ypos, xdir, ydir, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.xdir = xdir;
    this.ydir = ydir;
    this.speed = speed;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updatePosition(pos) {
  pos.xpos = pos.xdir == 1 ? pos.xpos -= pos.speed : pos.xpos += pos.speed;
  pos.ypos = pos.ydir == 1 ? pos.ypos -= pos.speed : pos.ypos += pos.speed;
  pos = updateDirs(pos);
  return pos;
}

function updateDirs(pos) {
  if(pos.xpos < rad || pos.xpos > canvas.width - rad) { pos.xdir *= -1; pos.speed *= 1 }
  if(pos.ypos < rad || pos.ypos > canvas.height - rad) { pos.ydir *= -1; pos.speed *= 1 }
  return pos;
}

var ctog = true;
var rad = 10;

function draw() {
  if(!active) { return; }
  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time +=1;
  position = updatePosition(position);
  ctx.fillStyle = colors['yellow'];
  ctx.fillRect(0, 0, canvas.width, canvas.height-10);
  if(time%40==0) { ctog = !ctog;}
  ctx.fillStyle = ctog ? colors['blue'] : colors['red'];

  ctx.beginPath();
  ctx.arc(position.xpos, position.ypos, rad, 0, Math.PI*2);
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
position = new Position(canvas.width/2, canvas.height - 40, 1, 1,-1);
var time = 0;

setInterval(draw, 10);
