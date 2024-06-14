// singleton


//////////// object literals
const mySym = Symbol("xxccx@222");
const user = {
    name : "Raunakk",
    age : 20,
    [mySym] : "Key",
    location : "Jabalpur",
    email : "raunakk11@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"]
}


console.log(user["age"]);
// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mySym]);

user.age = 21;
console.log(user["age"]);

// Object.freeze(user);
age = 25;
// console.log(user);

user.greeting = function() {
    console.log("Hello World!!");
}

user.greeting2 = function() {
    console.log(`Hello User, ${(this.name)}`);
}

console.log(user.greeting());

console.log(user.greeting2());

//////many functions is accessed by . operator but Symbol can only be accesed by [] square brackets..........


