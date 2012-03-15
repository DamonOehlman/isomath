//@header
(function (glob) {
    
    //= types/projection

    function isomath(ratio) {
        return new Projection(Math.atan(ratio || 0.5));
    }
    
    // export the projection type
    isomath.Projection = Projection;

    //@export isomath
})(this);