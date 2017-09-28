const isomath = require('..')();
const test = require('tape');

test('project 10, 10, 10', function(t) {
  t.plan(2);
  const result = isomath.project([10, 10, 10]);
  t.equal(result[0], 0);
  t.equal(Math.round(result[1]), -19);
});

test('project 100, 100, 100', function(t) {
  t.plan(2);
  const result = isomath.project([100, 100, 100]);
  t.equal(result[0], 0);
  t.equal(Math.round(result[1]), -189);
});

test('update the origin', function(t) {
  t.plan(2);
  isomath.setOrigin([150, 200]);
  const [originX, originY ] = isomath.getOrigin();

  t.equal(originX, 150);
  t.equal(originY, 200);
});
