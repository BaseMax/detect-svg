const detectSVG = require("./index.js");

console.log("excepted", true, "and getting", detectSVG('<svg xmlns="http://www.w3.org/2000/svg"><path fill="#00CD9F"/></svg>') )
console.log("excepted", true, "and getting", detectSVG('<svg xmlns="http://www.w3.org/2000/svg"><path fill="#00CD9F"/></svg>') )
console.log("excepted", true, "and getting", detectSVG('<svg></svg>') )
console.log("excepted", false, "and getting", detectSVG('<svg>') )
console.log("excepted", false, "and getting", detectSVG('<html></html>') )
console.log("excepted", false, "and getting", detectSVG('') )
console.log("excepted", false, "and getting", detectSVG(undefined) )
