var keys = [];

with (Array.prototype) {
  keys.push('alguma coisa');
}
console.log(keys);
console.log(Object.keys(Array.prototype[Symbol.unscopables]));
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]