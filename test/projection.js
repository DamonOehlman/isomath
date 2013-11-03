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


//     it('should be able to set the origin of the projection', function() {
//         projection.origin(150, 200);
        
//         expect(projection.originX).to.equal(150);
//         expect(projection.originY).to.equal(200);
//     });
    
//     it('should be able to define a projection that uses clamping', function() {
//         projection = isomath(0.5, { clamp: true });
        
//         expect(projection).to.be.ok();
//         expect(projection.clamp).to.be.ok();
//     });
    
//     it('should be able to forward project: 10, 10, 10', function() {
//         var result = projection.project(10, 10, 10);
        
//         expect(result[0]).to.equal(0);
//         expect(result[1]).to.equal(-19);
        
//     });
    
//     it('should be able to forward project: 100, 100, 100', function() {
//         var result = projection.project(100, 100, 100);
        
//         expect(result[0]).to.equal(0);
//         expect(result[1]).to.equal(-189);
//     });
// });