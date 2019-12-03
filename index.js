const { 
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
} = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isString('3'));
console.log(isBoolean('3'));
console.log(isArray('3'));
console.log(isObject('3'));
