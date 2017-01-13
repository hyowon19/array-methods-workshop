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

//High? Low?
// Write a function called highLow that takes an array of numbers, and returns an 
// object with a property highest containing the highest number, and a property lowest 
// containing the lowest number, using Array.prototype.reduce.
// For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
// Hint: Javascript has a special value called Infinity, which is higher than any other 
// number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)
var numArray = [23,7653,0,99,3,56,1,2398,23,4,7,86,33,89,1];

function highLow(arr) {
    var low = numArray.reduce(function(low, isLowest){
        if (low >= isLowest) {
            var low = isLowest;
        }
        return low;
    }, Infinity)
    var high = numArray.reduce(function(high, isHighest){
       if (high <= isHighest) {
           var high = isHighest;
       }
       return high;
    }, -Infinity)
    
    console.log("highest:" + high + ", lowest:" + low)
}

highLow()

// Wheel of Fortune
// Write a function called countChars that takes a string, and returns an object where 
// the keys are letters, and the value is the number of times that letter appears.
var someNewString = "Hello there world, how are you doing on this fine day?";

function countChars(aString) {
    var letters = {};
    aString
        .split("")
        .filter(function(currentLetter) {
            return currentLetter !== " ";
        })
        .forEach(function(currentLetter) {
            if(letters[currentLetter]) {
                letters[currentLetter] = letters[currentLetter] + 1;
            }
            else {
                letters[currentLetter] = 1
            }
        });
        return letters;
}

console.log(countChars(someNewString));

// Functional Programming
// In this exercise, your goal is to create a negate function. negate takes one 
// parameter: another function. negate should return a function that, when called, 
// will return the opposite of what the input function would return on the same input.

function negate(fn) {
    return function(x){
        return !fn(x);
    }
}

function isEven(num) {
  return num % 2 === 0;
}
function isEmpty(someList) {
  return someList.length === 0;
}

var isOdd = negate(isEven);
var isNotEmpty = negate(isEmpty);

console.log([1,2,3].filter(isEven));
console.log([1,2,3].filter(isOdd));