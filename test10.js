// copywrite 2021 Patrick Farrell
// created: 2021-10-29

const colors = {'yellow': '#fdfcdc', 'green': '#00afb9', 'blue': '#0081a7', 'brown': '#fed9b7', 'red': '#f07167'};
const PHI = 1.618033988749895;
const fps=15

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let d=0

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function draw() {
  ctx.fillStyle = colors['yellow'];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colors['blue'];
  for(let j=0; j<11; j++) {
    for(let i=0; i<36; i++) {
      d+=1
      keys = Object.keys(colors)
      ctx.fillStyle = colors[keys[getRandomInt(keys.length)]];
      ctx.strokeRect(i*50 + 10, j*50*PHI+10, 50, 50*PHI);
      ctx.fillRect(i*50 + 10, j*50*PHI+10, 50, 50*PHI);
    }
  }
  window.setTimeout(() => {
        requestAnimationFrame(draw);
  }, 1000 / fps);
}


draw()
