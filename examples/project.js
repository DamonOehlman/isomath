const isomath = require('..');

// get a reference to a projection (optional, but encouraged)
const project = isomath();

// project the isometric coordinates 0, 10, 50
console.log(project(0, 10, 50));
// --> [ -44.721359549995796, -32.3606797749979 ]
