This is a small JS library designed to help out with isometric math.  By design it is simply the isometric math functions required to translate from x,y,z isometric space to the x,y screen coordinates (and associated functions).

What you do with it is up to you.

## Example Usage

The first step in using `isomath` is initializing an isometric projection. This is done by calling the `isomath` function.  If called without any parameters then it defaults to the 1:2 projection.

<<< examples/project.js

As you can see above, the project function returns an array of x, y coordinates.  Why an array?  Let me show you:

<<< examples/draw-simple.js

Wonderful, isn't it :)

## Clamping Values

You will see in many guides on using canvas, that it's a good idea to clamp your values to aid performance.  In general having values aligned around the 0.5 value will produce a well performing and visually appealing display.

Should you want to clamp values (I do), then specify clamp true when initializing your projection.

<<< examples/clamped.js

### Running the Examples

From the command-line (after installing dependencies), run the following:

```
npm run examples
```

Then you will be able to access the examples at `http://localhost:8080/axes.html`, `http://localhost:8080/draw-simple.html`, etc (i.e. for every example js file that exists an HTML file is generated to access that example).
