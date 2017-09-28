const isomath = require('..')({ clamp: true });
const test = require('tape');

test('forward project 10, 10, 10', function(t) {
  var result;

  t.plan(2);
  result = isomath.project([10, 10, 10]);
  t.equal(result[0], 0);
  t.equal(result[1], -19);
});

test('forward project 100, 100, 100', function(t) {
  var result;

  t.plan(2);
  result = isomath.project([100, 100, 100]);
  t.equal(result[0], 0);
  t.equal(result[1], -189);
});
