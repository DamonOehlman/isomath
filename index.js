/* jshint node: true */
'use strict';

var Projection = require('./projection');

/**
  # isomath - Isometric Math helpers

  This is a small JS library designed to help out with isometric math.
  By design it is simply the isometric math functions required to translate
  from x,y,z isometric space to the x,y screen coordinates (and associated
  functions).

  What you do with it is up to you.

  ## Example Usage

  The first step in using isomath is initializing an isometric projection.
  This is done by calling the `isomath` function.  If called without any
  parameters then it defaults to the 1:2 project.

  <<< examples/project.js

  As you can see above, the project function returns an array of x, y coordinates.  Why an array?  Let me show you:

  ```js
  // assume that we have a reference to a canvas 2d context called context
  // do some moving and drawing of lines
  context.moveTo.apply(context, projection.project(0, 0, 0));
  context.lineTo.apply(context, projection.project(200, 0, 0));
  context.stroke();
  ```

  Wonderful, isn't it :)

  ## Clamping Values

  You will see in many guides on using canvas, that it's a good idea to clamp your values to aid performance.  In general having values aligned around the 0.5 value will produce a well performing and visually appealing display.

  Should you want to clamp values (I do), then specify clamp true when initializing your projection.  __NOTE__: When doing this you will always have to manually specify the isometric projection ratio (default = 0.5):

  ```js
  // get a reference to a projection, specify clamping
  var projection = isomath(0.5, { clamp: true });

  // project the isometric coordinates 0, 10, 50
  projection.project(0, 10, 50); // [ -44.721359549995796, -32.3606797749979 ]
  ```
**/

var isomath = module.exports = function(ratio, opts) {
  return new Projection(Math.atan(ratio || 0.5), opts);
}

// export the projection type
isomath.Projection = Projection