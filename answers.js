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

// Similar to the previous exercise, write a function called getPositives that 
// takes an array and uses the filter method to return a new array with only the positive numbers.

// my solution
var someArrayTwo = [1,-5,-6,423,-873,45,-8764,87,9,3,2,-45,5,0,-8,44];

function getPositives(item) {
    return item >= 0;
}

console.log(someArrayTwo.filter(getPositives)); // testing