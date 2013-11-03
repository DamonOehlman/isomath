var isomath = require('..');
var test = require('tape');
var projection;

test('define clamped projection', function(t) {
  t.plan(3);

  t.ok(projection = isomath(0.5, { clamp: true }));
  t.ok(projection instanceof isomath.Projection);
  t.ok(projection.clamp);
});

test('forward project 10, 10, 10', function(t) {
  var result;

  t.plan(2);
  result = projection.project(10, 10, 10);
  t.equal(result[0], 0);
  t.equal(result[1], -19);
});

test('forward project 100, 100, 100', function(t) {
  var result;

  t.plan(2);
  result = projection.project(100, 100, 100);
  t.equal(result[0], 0);
  t.equal(result[1], -189);
});