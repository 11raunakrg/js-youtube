/// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const str = "Raunakk";

for (const char of str) {
    // console.log(char);
}


/// Maps
const map = new Map();
map.set('IN',"INDIA");
map.set('PAK', "PAKISTAN");
map.set('US', "United States");
map.set('IN',"INDIA");


// console.log(map);

for (const key of map) {
    // console.log(key);           ////////print both key and value
}

for(const [key, value] of map) {
    // console.log(`The key is ${key} & the value is ${value}.`);
}


///for of loop is not iterable on objects


///////////////////for in loops(for objects)

const myObj = {
    JS : 'JavaScript',
    Cpp : 'C++',
    Java : 'JAVA',
    Go : 'GO'

}
console.log();
for (const key in myObj) {
    // console.log(key);        /////////print key values
    // console.log(myObj[key]);    //////////print values
    // console.log(`${key}, ${myObj[key]}`);    //////print key value pairs
}

////////// for each ///////////////
const coding = ["JS", "Java","cpp","Ruby","Go","Swift"]

coding.forEach( function (val) {
    console.log(val);
} )

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "JS"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "Py"
    }

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})