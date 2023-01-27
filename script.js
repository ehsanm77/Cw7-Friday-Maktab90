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

// Q2-Js
// let char = "hello i'm a student and search my problems in google";
// let result = '';

// <with for of>

// for (let str of char) {
// switch (str) {
//   case 'a':
//     result += '@';
//     break;
//   case 'e':
//     result += '3';
//     break;
//   case 'g':
//     result += '&';
//     break;
//   case 'i':
//     result += '!';
//     break;
//   case 'o':
//     result += '0';
//     break;
//   default:
//     result += str;
// }
// }
// console.log(result);

// <with forEach>

// let arr = char.split('');
// arr.forEach((item, index) => {
// switch (item) {
//   case 'a':
//     arr[index] = '@';
//     break;
//   case 'e':
//     arr[index] = '3';
//     break;
//   case 'g':
//     arr[index] = '&';
//     break;
//   case 'i':
//     arr[index] = '!';
//     break;
//   case 'o':
//     arr[index] = '0';
//     break;
//   default:
//     item;
// }
// });
// console.log(arr.join(''));

// Q3-Js
const obj = {
    name: "ali",
    family: "rahmani",
  };
  const turnStr = function (obj) {
    let arr = [];
    for (let key in obj) {
      let str = "";
      str += key;
      str += "@@";
      str += obj[key];
      arr.push(str);
    }
    console.log(arr);
    return arr.join("&&");
  };
  // console.log(typeof turnStr(obj));
  
  const turnObj = function (string) {
    let result = {};
    let arr = string.split("&&");
    for (let item of arr) {
      let arrTem = item.split("@@");
      // console.log(arrTem);
      result[arrTem[0]] = arrTem[1];
    }
    return result;
  };
  // console.log(typeof turnObj(turnStr(obj)));
  const mainFunc = function (check) {
    if (typeof check === "string") {
      return turnObj(check);
    } else if (typeof check === "object") {
      return turnStr(check);
    }
  };
  console.log(mainFunc(mainFunc(obj)));