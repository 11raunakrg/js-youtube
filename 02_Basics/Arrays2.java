const marvel_heroes = ["thor","Ironman","spiderman"];
const dc_heroes = ["superman","batman","flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
console.log(marvel_heroes[2]);
let new_heroes = marvel_heroes.concat(dc_heroes); //concates to arrays.........and returns a new array...
// console.log(new_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, ,5, 6], 7, 8];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Raunakk"));
console.log(Array.from("Raunakk"));
