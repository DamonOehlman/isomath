const project = require('..')({ origin: [250, 250]});
const crel = require('crel');

const canvas = crel('canvas', { width: 500, height: 500 });
const context = canvas.getContext('2d');

// draw a simple line
context.moveTo(...project(0, 0, 0));
context.lineTo(...project(200, 0, 0));
context.stroke();

document.body.appendChild(canvas);
