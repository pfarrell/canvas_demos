// colors from coolors.com https://coolors.co/4cc9f0-faf09b-cfc891-c4085a-c9c385-4898b0-e8106e
//
let colors = {'black': '#031E26', 'yellow': '#fdfcdc', 'green': '#00afb9', 'blue': '#0081a7', 'brown': '#fed9b7', 'red': '#f07167'};

let PHI = 1.618033988749895;

let active = true;

let Ball = class {
  constructor(x, y, xdelta, ydelta, color) {
    this.x = x;
    this.y = y;
    this.xdelta = xdelta;
    this.ydelta = ydelta;
    this.color = color;
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
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

document.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  if(event.keyCode === 32) {
    active = !active;
  }
});

