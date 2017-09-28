// @flow

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

  ### Running the Examples

  From the command-line (after installing dependencies), run the followinng:

  ```
  npm run examples
  ```

  Then you will be able to access the examples at `http://localhost:8080/axes.html`,
  `http://localhost:8080/draw-simple.html`, etc (i.e. for every example js file that
  exists an html file is generated to access that example).

**/

/*::
import type {
  Options,
  XY,
  XYZ
} from './types.js';
*/

module.exports = (opts /*: Options */) => {
  const origin /*: XY */ = (opts || {}).origin || [0, 0];
  const clamp /*: boolean */ = (opts || {}).clamp === true;
  const angle /*: number */ = Math.atan((opts || {}).ratio || 0.5);

  // cache the sin(ø) and cos(ø) values
  const angleSin = Math.sin(angle);
  const angleCos = Math.cos(angle);

  const project = (xyz /*: XYZ */) => {
    const [x, y, z] = xyz;
    const cart /*: XY */ = [(x - z) * angleCos, y + (x + z) * angleSin];

    let target /*: XY */ = [cart[0] + origin[0], -cart[1] + origin[1]];
    if (clamp) {
      target = [
        ~~(target[0] + (target[0] > 0 ? 0.5 : -0.5)),
        ~~(target[1] + (target[1] > 0 ? 0.5 : -0.5))
      ];
    }

    return target;
  };

  const getOrigin = () /*: XY */ => {
    return [
      origin[0],
      origin[1]
    ];
  };

  const setOrigin = (xy /*: XY */) => {
    origin[0] = xy[0];
    origin[1] = xy[1];
  };

  return {
    project,
    getOrigin,
    setOrigin
  };
};
