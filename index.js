/* jshint node: true */
'use strict';

var Projection = require('./projection');

/**
  # isomath

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

  As you can see above, the project function returns an array of x, y
  coordinates.  Why an array?  Let me show you:

  <<< examples/draw-simple.js

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

  <<< examples/clamped.js

  ## Reference

**/

/**
  ### isomath(ratio = 0.5, opts?)

  Create a new isomath projection using the specified `ratio` and applying
  any options that have been provided.

**/
var isomath = module.exports = function(ratio, opts) {
  return new Projection(Math.atan(ratio || 0.5), opts);
}

// export the projection type
isomath.Projection = Projection
