// isomath 0.0.1
// ────────────────────────────────────────────────────────────────────────────────────────
// Isometric Math Helpers
// ────────────────────────────────────────────────────────────────────────────────────────

(function (glob) {
    
    function Projection(angle) {
        // initialise the angle
        this.angle = angle;
        
        // initialise the originX and originY
        this.originX = 0;
        this.originY = 0;
        
        // 
        this.angleCos = Math.cos(angle);
        this.angleSin = Math.sin(angle);
        
        
    }
    
    Projection.prototype = {
        // ## origin getter / setter
        origin: function(x, y) {
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
        },
        
        // ## project
        // This function is used to project from the x, y, z coordinates from
        // isometric space to 2d screen coordinates.
        // 
        // Based on routines outlined at:
        // http://www.kirupa.com/developer/actionscript/isometric_transforms.htm
        project: function(x, y, z) {
            // calculate the cartesion coordinates
            var cartX = (x - z) * this.angleCos,
                cartY = y + (x + z) * this.angleSin;
                
            // convert to screen coordinates
            return [cartX + this.originX, -cartY + this.originY];
        }
    };


    function isomath(ratio) {
        return new Projection(Math.atan(ratio || 0.5));
    }
    
    // export the projection type
    isomath.Projection = Projection;

    (typeof module != "undefined" && module.exports) ? (module.exports = isomath) : (typeof define != "undefined" ? (define("isomath", [], function() { return isomath; })) : (glob.isomath = isomath));
})(this);