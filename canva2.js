function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function init() {
  window.requestAnimationFrame(draw);
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var xCenterCanvas = innerWidth/2;
var yCenterCanvas = innerHeight/2;

function PolyCustom(sides, size, x, y, color, rot) {
  this.sides = sides;
  this.size = size;
  this.x = x;
  this.y = y;
  this.color = color;
  this.rotation = 0
  this.radians = (Math.PI/180) * 2 * rot;

  this.draw = function() {
    this.rotation += this.radians;
    ctx.save();
    ctx.fillStyle = this.color;
    //ctx.translate(this.x, this.y);
    //ctx.translate(x +  size * Math.cos(0), y +  size *  Math.sin(0));

    //ctx.rotate(this.rotation);
    ctx.beginPath();
    ctx.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));

    for (var i = 1; i <= sides;i += 1) {
        ctx.lineTo (x + size * Math.cos(i * 2 * Math.PI / sides), y + size * Math.sin(i * 2 * Math.PI / sides));
    }
    ctx.closePath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fill();
    ctx.restore();

  }
}

// custom rectangle object
function RectangleCustom(x, y, w, h, color, cw) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.color = color;
    this.radians = (Math.PI/180) * 2 * cw; // change the last value to change speed
    this.rotation = 0;

    // draws a rectangle at given coordinates
    this.draw = function() {
        this.rotation += this.radians;
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillRect(-this.w/2,-this.h/2, this.w, this.h);
        ctx.restore();
    }


    this.update = function() {
         // animation updates
     }
}

// singleton rectangles
var bkgRectangle = new RectangleCustom(200, 200, innerWidth/20, innerHeight/20, "#212121", -.25);
var redRectangle = new RectangleCustom(xCenterCanvas - 64, yCenterCanvas - 64, 128, 128, "#F44336", 1);
var redPoly= new PolyCustom(5, 50, xCenterCanvas, yCenterCanvas, "#F44336", 1, 1);


// main animation loop
function mainAnimationLoop() {
  if(!active) { return; }
    // runs animation and clears the canvas each call
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    bkgRectangle.draw();
    redRectangle.draw();
    redPoly.draw();

}

setInterval(mainAnimationLoop, 100);
