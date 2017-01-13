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

someArrayThree.filter((x) => x >= 0).forEach(x => console.log(x));

// Filter Array
// Write a function called filterArray that takes a callback function and an array as arguments. 
// Your filterArray function should return a new array that contains only the elements where the 
// callback function returns true.
// NOTE: This is a trick question. The answer is a one-liner and you are allowed to use array.filter :)

var filterArray = Array.prototype.filter;

// The Longest Word
// Write a function called longestWord that takes a string as argument, and returns the 
// longest word in the string. You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split to split the string into an array of words.
var someString = "hey there sillynilly what can i do for you?";

function longestWord(str) {
    var tempArray = str.split(" ");
    return tempArray.reduce(function(longest, word){
        if(longest.length < word.length) {
            longest = word;
        }
        return longest;
    }, "")
}

console.log(longestWord(someString));

// I’d like to buy a vowel
// Write a function called countVowels that takes a string and returns the number of 
// vowels in the string. You should use Array.prototype.reduce to do your work.
// For the string "The quick brown fox", the output should be 5 because there is one e, 
// one u, one i and two os.
// Hint: You can use String.prototype.split again. There is a way to use it to split a 
// string by character. Try to Google it :)
// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if 
// the current letter is a vowel.
var vowelTest = "I have a lot of vowels, find them all!";

function countVowels(str) {
    var tempVowelArr = str.split("");
    return tempVowelArr.reduce(function(totalVowel, isVowel){
        if (isVowel.match(/[aeiou]/gim)) {
            totalVowel++;
        }
        return totalVowel;
    },0)
}

console.log(countVowels(vowelTest));