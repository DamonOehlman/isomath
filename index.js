const DEFAULT_OPTIONS = {
  angle: 0.5,
  origin: [0, 0],
  clamp: false,
};

module.exports = options => {
  if (options !== undefined && typeof options !== 'object') {
    throw new Error('initialization options required')
  }

  const { angle, origin, clamp } = { ...DEFAULT_OPTIONS, ...options };
  const angleCos = Math.cos(angle);
  const angleSin = Math.sin(angle);

  /**
    This function is used to project from the x, y, z coordinates from
    isometric space to 2d screen coordinates.

    Based on routines outlined at:
    http://www.kirupa.com/developer/actionscript/isometric_transforms.htm
  **/
  return (x, y, z) => {
    // calculate the cartesion coordinates
    const cartX = (x - z) * angleCos;
    const cartY = y + (x + z) * angleSin;
    const targX = cartX + origin[0];
    const targY = -cartY + origin[1];

    // if we are clamping, then clamp the values
    // clamp using the fastest proper rounding: http://jsperf.com/math-round-vs-hack/3
    return [
      clamp ? ~~targX : targX,
      clamp ? ~~targY : targY,
    ];
  };
};
