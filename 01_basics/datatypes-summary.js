// datatypes --> primitives and non-primitives

//primitives  : string, number, boolean, null, undefined, symbol, BigInt

//reference type(non-primitives) : arrays, objects, functions

//JS is dynamically type language

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);

console.log(id == anotherId)
