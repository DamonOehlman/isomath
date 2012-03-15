var isomath = require('../isomath'),
    expect = require('expect.js'),
    projection;
    
    
describe('isometric projection tests', function() {
    it('should be able to get a projection from isomath', function() {
        projection = isomath();
        expect(projection).to.be.ok();
        expect(projection instanceof isomath.Projection).to.be.ok();
    });
    
    it('should be able to forward project: 10, 10, 10', function() {
        var result = projection.project(10, 10, 10);
        
        expect(result[0]).to.equal(0);
        expect(Math.round(result[1])).to.equal(-19);
    });
    
    it('should be able to forward project: 100, 100, 100', function() {
        var result = projection.project(100, 100, 100);
        
        expect(result[0]).to.equal(0);
        expect(Math.round(result[1])).to.equal(-189);
    });
    
    it('should be able to set the origin of the projection', function() {
        projection.origin(150, 200);
        
        expect(projection.originX).to.equal(150);
        expect(projection.originY).to.equal(200);
    });
    
    it('should be able to define a projection that uses clamping', function() {
        projection = isomath(0.5, { clamp: true });
        
        expect(projection).to.be.ok();
        expect(projection.clamp).to.be.ok();
    });
    
    it('should be able to forward project: 10, 10, 10', function() {
        var result = projection.project(10, 10, 10);
        
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(-19);
        
    });
    
    it('should be able to forward project: 100, 100, 100', function() {
        var result = projection.project(100, 100, 100);
        
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(-189);
    });
});