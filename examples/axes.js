const crel = require('crel');
const isomath = require('..');

const canvas = crel('canvas', { width: 800, height: 600 });
const context = canvas.getContext('2d');
const projection = isomath(0.5, { clamp: true });

// set the origin for the projection
projection.origin(200, 370);

context.fillStyle = 'white';
context.fillRect(0, 0, 400, 400);

// draw the x-axis
context.strokeStyle = '#FF0000';
context.beginPath();
context.moveTo.apply(context, projection.project(0, 0, 0));
context.lineTo.apply(context, projection.project(200, 0, 0));
context.closePath();
context.stroke();

// draw the y-axis
context.strokeStyle = '#00FF00';
context.beginPath();
context.moveTo.apply(context, projection.project(0, 0, 0));
context.lineTo.apply(context, projection.project(0, 200, 0));
context.closePath();
context.stroke();

// draw the z-axis
context.strokeStyle = '#0000FF';
context.beginPath();
context.moveTo.apply(context, projection.project(0, 0, 0));
context.lineTo.apply(context, projection.project(0, 0, 200));
context.closePath();
context.stroke();

document.body.appendChild(canvas);
