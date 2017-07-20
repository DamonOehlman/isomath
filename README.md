
# isomath

This is a small JS library designed to help out with isometric math.
By design it is simply the isometric math functions required to translate
from x,y,z isometric space to the x,y screen coordinates (and associated
functions).

What you do with it is up to you.


[![NPM](https://nodei.co/npm/isomath.png)](https://nodei.co/npm/isomath/)


[![browser support](https://ci.testling.com/DamonOehlman/isomath.png)](https://ci.testling.com/DamonOehlman/isomath)

[![Build Status](https://api.travis-ci.org/DamonOehlman/isomath.svg?branch=master)](https://travis-ci.org/DamonOehlman/isomath) [![bitHound Score](https://www.bithound.io/github/DamonOehlman/isomath/badges/score.svg)](https://www.bithound.io/github/DamonOehlman/isomath) 

## Example Usage

The first step in using isomath is initializing an isometric projection.
This is done by calling the `isomath` function.  If called without any
parameters then it defaults to the 1:2 project.

```js
const isomath = require('isomath');

// get a reference to a projection (optional, but encouraged)
const projection = isomath();

// project the isometric coordinates 0, 10, 50
console.log(projection.project(0, 10, 50));
// --> [ -44.721359549995796, -32.3606797749979 ]

```

As you can see above, the project function returns an array of x, y
coordinates.  Why an array?  Let me show you:

```js
const projection = require('isomath')();
const crel = require('crel');

const canvas = crel('canvas', { width: 500, height: 500 });
const context = canvas.getContext('2d');

// set the origin to the centre of the canvas
projection.origin(250, 250);

// draw a simple line
context.moveTo.apply(context, projection.project(0, 0, 0));
context.lineTo.apply(context, projection.project(200, 0, 0));
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

__NOTE__: When doing this you will always have to manually specify the
isometric projection ratio (default = 0.5):

```js
const isomath = require('isomath');

// get a reference to a projection, specify clamping
const projection = isomath(0.5, { clamp: true });

// project the isometric coordinates 0, 10, 50
console.log(projection.project(0, 10, 50));
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

## Reference

### isomath(ratio = 0.5, opts?)

Create a new isomath projection using the specified `ratio` and applying
any options that have been provided.

### Projection(angle, opts)

#### origin(x, y)

Get or set the current projection origin.

#### project(x, y, z)

This function is used to project from the x, y, z coordinates from
isometric space to 2d screen coordinates.

Based on routines outlined at:
http://www.kirupa.com/developer/actionscript/isometric_transforms.htm

## License(s)

### MIT

Copyright (c) 2017 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
