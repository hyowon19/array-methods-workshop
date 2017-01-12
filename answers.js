var someArray = [1,-5,-6,423,-873,9,3,2,-45,5,0,-8];

Array.prototype.printPositives = function (item) {
    this.forEach(function(item) {
        if(item > 0) {
            console.log(item)
        }
    })
}

someArray.printPositives();


//  printPositives.someArray;
// var students = ["alice", "bob", "charles", "darwin"];

// var filteredStudents = [];

// students.forEach(function(item) {
//     if(item[0] !== "a") {  //item.length > 3   //
//       filteredStudents.push(item);
//     }
// });


// Array.prototype.printPositives = function (arr) {
//     var filtPositive = [];
//     this.forEach(function(item)) {
//         if(arr(item) > 0) {
            
//         }
//     }
// }