console.log(Math.random()); //b/w 0 and 1
console.log(Math.floor(Math.random()*10 + 1));

const min = 10;
const max = 20;

let ans = Math.floor(Math.random() * ( max - min + 1) )+ min;  //important formula
console.log(ans);