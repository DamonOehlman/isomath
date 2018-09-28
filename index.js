// @flow

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
