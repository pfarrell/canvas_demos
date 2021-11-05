// copywrite 2021 Patrick Farrell
// created: 2021-11-05

colors = {'yellow': 'rgba(250, 240, 155, .5)', 'blue': 'rgba(76, 201, 240, .5)', 'red': 'rgba(232, 16, 110, .5)'};

function draw() {
  if(t == canvas.width|| t == 0) {
    posdir = !posdir;
  }
  t = posdir ? t+1 : t-1;
  var gradient = ctx.createLinearGradient(0,0, canvas.width,0);

  // Add three color stops
  gradient.addColorStop(0, colors['yellow']);
  gradient.addColorStop(t/canvas.width, 'cyan');
  gradient.addColorStop(1, 'green');

  // Set the fill style and draw a rectangle
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var t = 1;
var posdir = true;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setInterval(draw, 1);

