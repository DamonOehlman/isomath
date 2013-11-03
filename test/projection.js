var isomath = require('..');
var test = require('tape');
var projection;

test('expose projection', function(t) {
  t.plan(1);
  t.ok(isomath.Projection);
});

test('create projection', function(t) {
  t.plan(2);
  t.ok(projection = isomath());
  t.ok(projection instanceof isomath.Projection);
});

test('project 10, 10, 10', function(t) {
  var result;

  t.plan(2);
  result = projection.project(10, 10, 10);
  t.equal(result[0], 0);
  t.equal(Math.round(result[1]), -19);
});

test('project 100, 100, 100', function(t) {
  var result;

  t.plan(2);
  result = projection.project(100, 100, 100);
  t.equal(result[0], 0);
  t.equal(Math.round(result[1]), -189);
});

test('update the origin', function(t) {
  t.plan(2);

  projection.origin(150, 200);

  t.equal(projection.originX, 150);
  t.equal(projection.originY, 200);
});