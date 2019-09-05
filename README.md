# isomath

This is a small JS library designed to help out with isometric math.
By design it is simply the isometric math functions required to translate
from x,y,z isometric space to the x,y screen coordinates (and associated
functions).

What you do with it is up to you.

[![NPM](https://nodei.co/npm/isomath.png)](https://nodei.co/npm/isomath/)

[![Build Status](https://api.travis-ci.org/DamonOehlman/isomath.svg?branch=master)](https://travis-ci.org/DamonOehlman/isomath)

## Example Usage

The first step in using isomath is initializing an isometric projection.
This is done by calling the `isomath` function.  If called without any
parameters then it defaults to the 1:2 project.

```js
const isomath = require('..');

// get a reference to a projection (optional, but encouraged)
const project = isomath();

// project the isometric coordinates 0, 10, 50
console.log(project(0, 10, 50));
// --> [ -44.721359549995796, -32.3606797749979 ]
```

As you can see above, the project function returns an array of x, y
coordinates.  Why an array?  Well thanks to [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) this is pretty useful:

```js
const project = require('..')({ origin: [250, 250]});
const crel = require('crel');

const canvas = crel('canvas', { width: 500, height: 500 });
const context = canvas.getContext('2d');

// draw a simple line
context.moveTo(...project(0, 0, 0));
context.lineTo(...project(200, 0, 0));
context.stroke();

document.body.appendChild(canvas);
```

Wonderful, isn't it :)

## Clamping Values

You will see in many guides on using canvas, that it's a good idea to
clamp your values to aid performance.  In general having values aligned
around the 0.5 value will produce a well performing and visually appealing
display.

Should you want to clamp values (I do), then specify clamp true when
initializing your projection.

**NOTE**: When doing this you will always have to manually specify the
isometric projection ratio (default = 0.5):

```js
const isomath = require('..');

// get a reference to a projection, specify clamping
const project = isomath({ angle: 0.5, clamp: true });

// project the isometric coordinates 0, 10, 50
console.log(project(0, 10, 50));
// --> [ -45, -32 ]
```

### Running the Examples

From the command-line (after installing dependencies), run the followinng:

```
npm run examples
```

Then you will be able to access the examples at `http://localhost:8080/axes.html`,
`http://localhost:8080/draw-simple.html`, etc (i.e. for every example js file that
exists an html file is generated to access that example).

## LICENSE

The MIT License (MIT)

Copyright (c) 2019 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
