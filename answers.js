// Only the pos
// Write a function called printPositives that takes an array and uses the forEach 
// method to print only the positive numbers.

var someArray = [1,-5,-6,423,-873,9,3,2,-45,5,0,-8];

Array.prototype.printPositives = function (item) {
    this.forEach(function(item) {
        if(item >= 0) {
            console.log(item)
        }
    })
}

someArray.printPositives(); //testing

// Get positive
// Similar to the previous exercise, write a function called getPositives that 
// takes an array and uses the filter method to return a new array with only the positive numbers.

var someArrayTwo = [1,-5,-6,423,-873,45,-8764,87,9,3,2,-45,5,0,-8,44];

function getPositives(item) {
    return item >= 0;
}

console.log(someArrayTwo.filter(getPositives)); // testing

// Filter it out
// Re-do exercise 1 by first filtering the input array, and then printing the numbers 
// from the filtered array. Your code will look something like: return arr.filter(...).forEach(...).

var someArrayThree = [0, 1,-5,-6, 42, 3,-873,45,-87, 64 , -101, 87, 9, 3, 2, -45,5,0,-8,44];

return someArrayThree.filter((x) => x >= 0).forEach(x => console.log(x));

// Filter Array
// Write a function called filterArray that takes a callback function and an array as arguments. 
// Your filterArray function should return a new array that contains only the elements where the 
// callback function returns true.
// NOTE: This is a trick question. The answer is a one-liner and you are allowed to use array.filter :)

