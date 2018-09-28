const crel = require('crel');
const isomath = require('..')({ clamp: true });

const canvas = crel('canvas', { width: 800, height: 600 });
const context = canvas.getContext('2d');

// set the origin for the projection
isomath.setOrigin([200, 370]);

context.fillStyle = 'white';
context.fillRect(0, 0, 400, 400);

// draw the x-axis
context.strokeStyle = '#FF0000';
context.beginPath();
context.moveTo.apply(context, isomath.project([0, 0, 0]));
context.lineTo.apply(context, isomath.project([200, 0, 0]));
context.closePath();
context.stroke();

// draw the y-axis
context.strokeStyle = '#00FF00';
context.beginPath();
context.moveTo.apply(context, isomath.project([0, 0, 0]));
context.lineTo.apply(context, isomath.project([0, 200, 0]));
context.closePath();
context.stroke();

// draw the z-axis
context.strokeStyle = '#0000FF';
context.beginPath();
context.moveTo.apply(context, isomath.project([0, 0, 0]));
context.lineTo.apply(context, isomath.project([0, 0, 200]));
context.closePath();
context.stroke();

document.body.appendChild(canvas);
