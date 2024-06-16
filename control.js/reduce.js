const nums = [1,2,3,4,5];

const total = nums.reduce(function(acc,curr_val){     /////acc --> accumulator And curr_value --> Current Value
    return acc + curr_val
}, 0 )

console.log(total);

///By Arrow Function

const myTotal = nums.reduce( (acc,curr_val) => {return acc + curr_val} , 0 )
console.log(myTotal);