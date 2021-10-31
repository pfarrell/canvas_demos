// copywrite 2021 Patrick Farrell
// created: 2021-10-29

//let colors = {'yellow': '#faf09b', 'blue': '#4cc9f0', 'red': '#e8106e'};
colors = {'yellow': 'rgba(250, 240, 155, .5)', 'blue': 'rgba(76, 201, 240, .5)', 'red': 'rgba(232, 16, 110, .5)'};

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = 'darker';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let positions = [0, 0];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function animate(draw_func, fps) {
  window.setTimeout(() => {
        requestAnimationFrame(draw_func);
  }, 1000 / fps);
}
time = 0;

function update_positions(pos) {
  for(let i = 0; i<pos.length; i++){
    pos[i] = pos[i] += 1;
  }
}

function draw() {
  if(!active) { return; }
  time += 1;
  ctx.save();
  //positions = update_positions(positions);
  //if(time % 100 == 0){
    update_positions(positions);
  //}
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colors['blue'];
  ctx.fillRect(200, 200+positions[0], 100, 100*PHI);
  ctx.fillStyle = colors['yellow'];
  ctx.fillRect(200, 400-positions[1], 100, 100*PHI);
  ctx.restore();
  animate(draw, 10)
}

setInterval(draw, 50)
