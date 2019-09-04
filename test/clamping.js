var isomath = require('..');
var test = require('tape');

test('forward project 10, 10, 10', function(t) {
  const project = isomath({ angle: 0.5, clamp: true });

  t.plan(2);
  const result = project(10, 10, 10);
  t.equal(result[0], 0);
  t.equal(result[1], -19);
});

test('forward project 100, 100, 100', function(t) {
  const project = isomath({ angle: 0.5, clamp: true });

  t.plan(2);
  const result = project(100, 100, 100);
  t.equal(result[0], 0);
  t.equal(result[1], -189);
});
