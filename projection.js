/* jshint node: true */
'use strict';

/**
  ### Projection(angle, opts)

**/
function Projection(angle, opts) {
  if (! (this instanceof Projection)) {
    return new Projection(angle, opts);
  }

  // initialise the angle
  this.angle = angle;

  // initialise the originX and originY
  this.originX = 0;
  this.originY = 0;

  this.angleCos = Math.cos(angle);
  this.angleSin = Math.sin(angle);

  // initialise options
  opts = opts || {};
  this.clamp = opts.clamp;
}

module.exports = Projection;
var proto = Projection.prototype;

/**
  #### origin(x, y)

  Get or set the current projection origin.
**/
proto.origin = function(x, y) {
  if (typeof y != 'undefined') {
    this.originX = x;
    this.originY = y;
  }
  else if (typeof x == 'object') {
    this.originX = x.x;
    this.originY = x.y;
  }
  else {
    return {
      x: this.originX,
      y: this.originY
    };
  }

  return this;
};

/**
  #### project(x, y, z)

  This function is used to project from the x, y, z coordinates from
  isometric space to 2d screen coordinates.

  Based on routines outlined at:
  http://www.kirupa.com/developer/actionscript/isometric_transforms.htm
**/
proto.project = function(x, y, z) {
  // calculate the cartesion coordinates
  var cartX = (x - z) * this.angleCos;
  var cartY = y + (x + z) * this.angleSin;
  var targX = cartX + this.originX;
  var targY = -cartY + this.originY;

  // if we are clamping, then clamp the values
  // clamp using the fastest proper rounding: http://jsperf.com/math-round-vs-hack/3
  if (this.clamp) {
    targX = ~~(targX + (targX > 0 ? 0.5 : -0.5));
    targY = ~~(targY + (targY > 0 ? 0.5 : -0.5));
  }

  // return the screen coordinates in a array (makes using apply for functions taking an x and y simple)
  return [targX, targY];
};