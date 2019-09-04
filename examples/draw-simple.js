const project = require('..')({ origin: [250, 250]});
const crel = require('crel');

const canvas = crel('canvas', { width: 500, height: 500 });
const context = canvas.getContext('2d');

// draw a simple line
context.moveTo.apply(context, project(0, 0, 0));
context.lineTo.apply(context, project(200, 0, 0));
context.stroke();

document.body.appendChild(canvas);
