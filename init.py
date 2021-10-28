import sys
import webbrowser
import os
import subprocess
from datetime import date

from os.path import exists

def usage():
    return f"usage: python {__name__} [file_to_gen]"


def write_html_file(file_name:str):
    fn = f"{file_name}.html"
    f = open(fn, "x")
    f.write(
"""<doctype html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8">
    <title>Rolling</title>
    <style>
      html, body {
          overflow: hidden;
      }
    </style>
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script src="%s.js"></script>
  </body>
</html>
<!-- copywrite %s patf.net-->
""" % (file_name, date.today().year)
    )


def write_js_file(file_name:str):
    fn = f"{file_name}.js"
    f = open(fn, "x")
    f.write(
"""// copywrite %s Patrick Farrell
// created: %s

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
  ctx.fillStyle = '#ff6';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


draw()
""" % (date.today().year, date.today())
    )


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.stderr.write(f"Error: {usage()}\n")
        sys.exit(1)
    file_name = sys.argv[1]
    write_html_file(file_name)
    write_js_file(file_name)
    webbrowser.open(f"file:///home/pfarrell/proj/rolling/{file_name}.html", new=2)
    cmd = os.environ.get('EDITOR', 'vi') + ' ' + file_name + '.js'
    subprocess.call(cmd, shell=True)
