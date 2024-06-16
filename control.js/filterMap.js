const myCoding = ["JS","Java","Cpp","Python","Lang","Go","Swift","Ruby"]

const values = myCoding.forEach( (item) => {
    // console.log(item);
    return item;          ///////undefined coz forEach don't return any value
})

// console.log(values);

////////To return a value we use filter//////////////////
const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

const newNums = myNums.filter( (nums) => {
    return nums > 3
})

// console.log(newNums);

const newNums2 = [];
myNums.forEach( (items) => {
    if(items > 4) {
        newNums2.push(items);
    }
})

// console.log(newNums2);

const myNumbers = [1, 2, 3, 4, 5, 6, 7 , 8, 9 , 10];

// myNumbers.forEach( (items) => {
//     console.log(items+10);
// })

const arr = myNumbers.map( (num) => num + 10);
// console.log(arr);

//++++++++++++++++++++++++++++++++++++++++Chaining+++++++++++++++++++++++++++++++++

const numbers = [11, 12, 13, 14, 15, 16, 17 , 18];

const newnumbers = numbers
                   .map( (number) => number * 10)
                   .map( (number) => number + 1)
                   .filter((number) => number > 121)

console.log(newnumbers);