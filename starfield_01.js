// copywrite 2021 Patrick Farrell
// created: 2021-10-30


function draw() {
  if(!active) { return; }
  time += 1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if(time % 10 == 0) { startTimes.push([time,randomColor(colors['black'])]); }
  for(let i=0; i<startTimes.length; i++) {
    startTime = startTimes[i][0];
    color = startTimes[i][1];
    if(time - startTime > 0) {

      ctx.save()
      ctx.translate(canvas.width/2, canvas.height/2);
      ctx.transform(10/(time-startTime), 0, 0, 10/(time-startTime), 0, 0);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth=10;
      ctx.arc(0, 0, canvas.height/2-5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
    if(time - startTime > 2000) { 
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

setInterval(draw, 50);
