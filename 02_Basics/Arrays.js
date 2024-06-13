//arrays

const myArr = [0, 1, 2, 3, 4, 5, true, 'Raunakk'];  //Array is an object, it is resizeable

console.log(myArr);

myArr.push(11);
console.log(myArr);
console.log(myArr.length);

myArr.pop();
console.log(myArr);

//important
myArr.unshift(11);
console.log(myArr);

myArr.shift();
console.log(myArr);

let newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr); //type changes from object to String......

const myn1 = myArr.slice(1,3);  //1-index -- inclusive and 3-index inclusive and it returns a copy of sliced array
console.log(myn1);
  
const myn2  = myArr.splice(1,3); //Both index inclusive and also it modfies the original array
console.log(myn2);
console.log(myn2);
