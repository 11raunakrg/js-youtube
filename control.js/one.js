/// if
let ans = false;
if(2 == "2") {
    ans = true;   ///////////gives true coz it only checks for value and not datatypes.....
}

// console.log(ans);

let ans2 = false;
if( 2 === "2") {
    ans2 = true;   /////////////gives false coz it checks for value as well as datatypes.......
}

// console.log(ans2);


const score = 227;
if(score > 100) {
    let power = "fly";
    // console.log(`We get power to : ${power}`)
}
// console.log(`We get power to : ${power}`);      will give error.....


///////////////switch statements//////////////////
const month = 7;
switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    default:
        console.log("No matches found")
        break;
}

//////falsy values -->   false, 0, -0, BigInt 0n, null, undefined, NaN, ""

/////// truthy values --> "0", 'false', " ", [], {}, function() {}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty....");
}


/////////NULLISH COALESCING OPERATOR(??) : NULL, UNDEFINED

let val1;

val1 = 5 ?? 10;

console.log(val1);        //////gives 5..........

let val2;
val2 = null ?? 10;
console.log(val2);         //////will give 10..........

let val3;
val3 = undefined ?? 11;
console.log(val3);          ////////will gives 11......


/////////////////Terniary operator
//syntax....
// condition ? true : false

const age = 17;

age >= 18 ? console.log("Can Vote...") : console.log("Can't Vote...");
