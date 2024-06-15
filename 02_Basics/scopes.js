// var c = 300;
let a = 300;
 if(true){          ////scopes
    let a = 10;  ///local scope
    const b = 20; ///global scope
//    var c = 25;  ///global scope  avoid using "var".....
    // console.log(`value of a is ${a}`);
   
 }

// console.log(`value of a is ${a}`);
// console.log(b);
// console.log(c);

function one(username) {
    console.log(`Name is ${username}`);

    function two() {
        const website = "youtube";
        console.log(website);
        
    }
    two();

    // console.log(website);    ///////give error
}
// two();
// one("Raunakk");

if(true) {
    const username = "Raunakkk";
    if(username === "Raunakkk") {
        const website = "  youtube";
        // console.log(username  + website);
    }
    // console.log(website);
}
// console.log(username);
/////////+++++++++++++++++++++++++++++ Important concept ++++++++++++++++++++++++/////////////////////////
console.log(addOne(5));

function addOne(num) {
    return num + 1;
}


console.log(addTwo(9));         //////////gives error(called as hoisting...)////////
const addTwo = function addTwo(num) {
    return num + 2;
}


