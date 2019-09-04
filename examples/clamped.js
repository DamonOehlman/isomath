const isomath = require('..');

// get a reference to a projection, specify clamping
const project = isomath({ angle: 0.5, clamp: true });

// project the isometric coordinates 0, 10, 50
console.log(project(0, 10, 50));
// --> [ -45, -32 ]
