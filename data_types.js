"use strict";

// alert(3+3) using node.js , not browser

console.log(3+3);

let name = "rishabh"
let age = 22
let isStudent = true
let marks = null
let marks2 = undefined
let marks3 = NaN
let marks4 = Symbol('rishabh') // unique identifier
let marks5 = BigInt(12345678901234567890n) // big integer
let marks6 = [1, 2, 3, 4, 5]
let marks7 = {name: "rishabh", age: 22, isStudent: true}


console.log(typeof name)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof marks)
console.log(typeof marks2)
console.log(typeof marks3)
console.log(typeof marks4)
console.log(typeof marks5)
console.log(typeof marks6)
console.log(typeof (marks7))


let score ="33a";
let vlueInNumber = Number(score); // convert string to number implicitly

console.log(vlueInNumber ); // NaN
console.log(typeof vlueInNumber); // number

let temp = null; // null is not a number
let no = Number(temp); // convert null to number implicitly  
console.log(no); // 0
console.log(typeof no); // number

let variable = "fsgfgdgsd"; // string is not a boolean
let boolcheck = Boolean(variable); // convert string to boolean implicitly
console.log(boolcheck); // true

let variable2 = 0; // 0 is falsy value
console.log(Boolean(variable2)); // false


let num = 123; // number to string
let strNum = String(num);
console.log(strNum); // "123"
console.log(typeof strNum); // string

let bool = true; // boolean to string
let strBool = String(bool);
console.log(strBool); // "true"
console.log(typeof strBool); // string

let arr = [1, 2, 3]; // array to string
let strArr = String(arr);
console.log(strArr); // "1,2,3"
console.log(typeof strArr); // string

let obj = { key: "value" }; // object to string
let strObj = String(obj);
console.log(strObj); // "[object Object]"
console.log(typeof strObj); // string
