const crel = require('crel');
const isomath = require('..');

const canvas = crel('canvas', { width: 800, height: 600 });
const context = canvas.getContext('2d');

const project = isomath({
  ratio: 0.5,
  clamp: true,
  origin: [200, 370],
});

context.fillStyle = 'white';
context.fillRect(0, 0, 400, 400);

const axes = [
  { color: '#FF0000', start: [0, 0, 0], end: [200, 0, 0] },
  { color: '#00FF00', start: [0, 0, 0], end: [0, 200, 0] },
  { color: '#0000FF', start: [0, 0, 0], end: [0, 0, 200] },
];

for (const { color, start, end } of axes) {
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(...project(...start));
  context.lineTo(...project(...end));
  context.closePath();
  context.stroke();
}

document.body.appendChild(canvas);
