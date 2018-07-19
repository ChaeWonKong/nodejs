var a = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(parseInt(a[0])+parseInt(a[1]));
