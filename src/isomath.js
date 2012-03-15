//@header
(function (glob) {
    
    //= types/projection

    function isomath(ratio, opts) {
        return new Projection(Math.atan(ratio || 0.5), opts);
    }
    
    // export the projection type
    isomath.Projection = Projection;

    //@export isomath
})(this);