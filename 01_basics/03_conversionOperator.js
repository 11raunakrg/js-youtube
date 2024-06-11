let score = "33";

console.log(typeof(score))

let varInNumber = Number(score);

console.log(typeof varInNumber);

/* Conversion of Datatypes */
//"33" => 33
//"33abc" => NaN(Not a Number)
//true/false => 1/0

let isLoggedIn = "";
let valueCheck = Boolean(isLoggedIn);

console.log(valueCheck);

/* 1 ==> true
0 ==> false
"Raunakk" ==> true
"" ==> false */

/****************************** Operations **********************************/
let value = 11;
let negValue = -value;

console.log(negValue);

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2**3); //2 to the power 3
console.log(2/3);
console.log(2%3); //remainder

console.log(1 + 2); //3
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2");  //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
console.log(1 + "2" + 2); //122

console.log("2" == 2); //true coz "2" is converted to 2
console.log("2" === 2); //false coz === check for datatypes

