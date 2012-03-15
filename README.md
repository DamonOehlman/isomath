# isomath - Isometric Math helpers

This is a small JS library designed to help out with isometric math. By design it is simply the isometric math functions required to translate from x,y,z isometric space to the x,y screen coordinates (and associated functions).

What you do with it is up to you.

## Example Usage

The first step in using isomath is initializing an isometric projection.  This is done by calling the `isomath` function.  If called without any parameters then it defaults to the 1:2 project.

```js
var projection = isomath();
```