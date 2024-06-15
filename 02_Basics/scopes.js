// var c = 300;
let a = 300;
 if(true){          ////scopes
    let a = 10;  ///local scope
    const b = 20; ///global scope
//    var c = 25;  ///global scope  avoid using "var".....
    console.log(`value of a is ${a}`);
   
 }

console.log(`value of a is ${a}`);
// console.log(b);
// console.log(c);


