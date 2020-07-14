# detect-svg

Detect a string or buffer is SVG or not (javascript, nodejs)

### Installing

```
npm i detect-svg
```

You can view this package at npm (https://www.npmjs.com/package/detect-svg)

### Example

```
detectSVG('<svg xmlns="http://www.w3.org/2000/svg"><path fill="#00CD9F"/></svg>')
// true
detectSVG('<svg></svg>')
// true
detectSVG('<svg>')
// false
detectSVG('<html></html>')
// false
detectSVG('')
// false
detectSVG(undefined)
// false
```

### Using detect-svg
```js
const detectSVG = require("./index.js");

console.log( detectSVG('<svg xmlns="http://www.w3.org/2000/svg"><path fill="#00CD9F"/></svg>') )
```

---------

# Max Base

My nickname is Max, Programming language developer, Full-stack programmer. I love computer scientists, researchers, and compilers. ([Max Base](https://maxbase.org/))

## Asrez Team

A team includes some programmer, developer, designer, researcher(s) especially Max Base.

[Asrez Team](https://www.asrez.com/)

