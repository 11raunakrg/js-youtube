const tinderUser = new Object() ///singleton object and value same as tinderUser = {}..........

console.log(tinderUser);

tinderUser.id = "123abc@ggg";
tinderUser.name = "Viratttt";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "raunakk@gmail",
    fullname : {                               ////////nested objects
        userfullname : {
            firstname : "Raunakk",
            lastname : "Guptaa"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


//////////////combining 2 or more objects/////////////////
const ob1 = {1 : "a", 2 : "b"}
const ob2 = {3 : "c", 4 : "d"}

// const ob3 = { ...ob1, ...ob2};  ////simple n efficient to use...........
const ob3 = Object.assign({}, ob1, ob2);
console.log(ob3);


// console.log(tinderUser);
console.log(Object.keys(tinderUser));   //////Datatype is an arrayyy..............
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('class'));

