"use strict"

// Q1-Js
// Array
let people = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Jane", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Johnson", age: 35 },
    { firstName: "Samantha", lastName: "Williams", age: 28 },
    { firstName: "Michael", lastName: "Brown", age: 40 },
    { firstName: "Emily", lastName: "Jones", age: 32 },
    { firstName: "Jacob", lastName: "Miller", age: 27 },
    { firstName: "Ashley", lastName: "Davis", age: 24 },
    { firstName: "Bob", lastName: "sarani", age: 35 },
    { firstName: "Matthew", lastName: "Garcia", age: 31 },
    { firstName: "Olivia", lastName: "Rodriguez", age: 26 }
];

//find
// function findLoop(arr, func) {
//     for (let index = 0; index < arr.length; index++) {
//         if (func(arr[index] , index)) {
//             return arr[index];

//         }
//     }
//     return console.log("not find");
// }

// console.log( findLoop(people, (item , index) => item.firstName === "Bob" && index > 2));


// map
// function mapLoop(arr, func) {
//     let getmap = []
//     for (let index = 0; index < arr.length; index++) {
//         getmap.push(func(arr[index], index));
//     }
//     return getmap;
// }

// console.log( mapLoop(people , (item , index)=>{ item.firstName = 'Bob'
// return index % 2 === 0 ? item : " false "
// }));


//forEach
// function forEachLoop(arr, func) {

//     for (let index = 0; index < arr.length; index++) {
//         func(arr[index], index);
//     }
//     return arr;
// }

// console.log(forEachLoop(people, (item, index) => { item.firstName = "Bob"}));

// console.log(people);



