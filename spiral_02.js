// copywrite 2021 Patrick Farrell
// created: 2021-11-01


function draw() {
  if(!active) { return; }
  let time = 0;
  //factor=randomInt(10);
  ticker+=1
  factor=5;
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = colors['yellow'];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  //ctx.strokeStyle= randomColor(colors['yellow']);
  ctx.strokeStyle= colors['black'];
  ctx.translate(Math.floor(canvas.width/2), Math.floor(canvas.height/2));
  ctx.beginPath();
  for(let i=0;i<5005; i++) {
    
    time += 1;
    ctx.rotate((time%factor) * Math.PI/180);
    ctx.lineTo(time*.1,0);
    if(time % 5 == 0) { 
      ctx.rotate(100 * Math.PI/180); 
    }
  }
  ctx.stroke();
  ctx.closePath();
  ctx.translate(-1*Math.floor(canvas.width/2), -1*Math.floor(canvas.height/2));
}

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');
let ticker=0;

setInterval(draw, 50);

