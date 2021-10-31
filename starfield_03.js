// copywrite 2021 Patrick Farrell
// created: 2021-10-30


function draw() {
  if(!active) { return; }
  time += 1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if(time % randomInt(10) == 0) { for(let i=0; i<randomInt(50); i++) {startTimes.push([time,randomColor(colors['black']), randSignFlip()*randomInt(canvas.width), randSignFlip()*randomInt(canvas.height)]); }}
  for(let i=0; i<startTimes.length; i++) {
    startTime = startTimes[i][0];
    color = startTimes[i][1];
    x = startTimes[i][2];
    y = startTimes[i][3];
    if(time - startTime > 0) {

      ctx.save()
      ctx.translate(Math.floor(canvas.width/2), Math.floor(canvas.height/2));
      ctx.transform((time-startTime)/500, 0, 0, (time-startTime)/500, 0, 0);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, 2*Math.PI);
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
    if(time - startTime > randomInt(1000)) { 
      startTimes.splice(i, 1); 
    }
  }
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d', {alpha: false});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let time = 0;
let startTimes = [];
setInterval(draw, 10);
