// copywrite 2021 Patrick Farrell
// created: 2021-10-30

// colors from coolors.com https://coolors.co/4cc9f0-faf09b-cfc891-c4085a-c9c385-4898b0-e8106e

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function animate(draw_func, fps) {
  window.setTimeout(() => {
        requestAnimationFrame(draw_func);
  }, 1000 / fps);
}

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, rad, 0, Math.PI*2);
    ctx.fill();
    ctx.arc(ball.x, ball.y, rad, 0, Math.PI*2);
    ctx.stroke();
    ctx.closePath();
}

function updateBall(ball) {
  if(ball.x <= rad/2 || ball.x >= width - rad/2) { ball.xdelta *= -1; }
  if(ball.y <= rad/2 || ball.y >= height - rad/2) { ball.ydelta *= -1; }
  ball.x += ball.xdelta;
  ball.y += ball.ydelta;
}

function draw() {
  if(!active) { return; }
  ctx.save();
  time += 1
  ctx.fillStyle = bg_color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.translate(width/6, 20);
  // draw boundaries
  ctx.strokeStyle = colors['black'];
  ctx.strokeRect(0, 0, width, height);
  balls.forEach((ball) => {
    ctx.fillStyle = ball.color;
    drawBall(ball);
    updateBall(ball);
  });
  ctx.restore();

  if(randomInt(100) == 0) { balls.push(newRandBall()); }

}

function randomColor(bg) {
  let color = colors[Object.keys(colors)[randomInt(Object.keys(colors).length)]];
  return color == bg ? randomColor(bg) : color;
}

function randSignFlip() {
  return randomInt(2) == 0 ? 1 : -1;
}

function randomPosInt(max) {
  let rand = randomInt(max);
  return rand == 0 ? randomPosInt(max) : rand;
}

function newRandBall() {
  return new Ball(randomPosInt(width), randomPosInt(height), randomPosInt(3)*randSignFlip(), randomPosInt(3)*randSignFlip(), randomColor(bg_color));
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let time = 0;
let rad = 10;
let bg_color = colors['yellow']; //colors['yellow'];
let width = 800*PHI;
let height = 800;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var balls = [];
for(let i=0; i<1; i++) {
  balls.push(newRandBall());
}

setInterval(draw, 10)
