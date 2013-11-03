var projection = require('..')();
var crel = require('crel');
var canvas = crel('canvas', { width: 500, height: 500 });
var context = canvas.getContext('2d');

// set the origin to the centre of the canvas
projection.origin(250, 250);

// draw a simple line
context.moveTo.apply(context, projection.project(0, 0, 0));
context.lineTo.apply(context, projection.project(200, 0, 0));
context.stroke();

document.body.appendChild(canvas);