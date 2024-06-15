function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("K");

}

// sayMyName()

function addTwoNums(num1, num2) {
    console.log(num1 + num2);
}

function addTwoNums2(num1, num2) {
   let result = num1 + num2;
   return result;
}

const result = addTwoNums2(3 , 5)

console.log(`Result is : ${result}`)

function loginUserMessage(username = "Anoyomous") {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in...`;
}

console.log(loginUserMessage());

function calculateCartPrice(...num1) {   /////......  --> Rest operator(to pass multiple values)
    return num1;
}

console.log(calculateCartPrice(200,100,120,150,360));   ////////returns array of prices

const user = {
    username : "Raunakk",
    age : 20

}

function handleObjects(anyObject) {
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObjects(user);

const myNewArray = [2,1,3,4,5];

function return2ndValue(getArray) {
    return getArray[1];  ///returns 2nd value
}
console.log(return2ndValue(myNewArray));