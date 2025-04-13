// primitive and non primitive memory management
// primitve data types are stored in stack memory,passed by value
// 7 type  : string, number, boolean, null, undefined, symbol, bigint


// non primitive data types are stored in heap memory, passed by reference

// 3 type : object, array, function

// no data type is defined in javascript, it is dynamically typed language
// data type is determined at runtime
// data type is determined by the value assigned to the variable

let user;
console.log(typeof user); // undefined
const id = Symbol('id'); // unique identifier
const another_id = Symbol('id'); // unique identifier
console.log(id === another_id); // false
console.log(id===another_id); // false

const no = 312332332n; // 312332332n is a big integer


// n in bigint means it is a big integer

const heros = ["spiderman", "batman", "superman"] // array of strings
let obj = {
    name : "rishabh",
    age : 22,
}

const myfunction = function(){console.log ("hello world")}; // function is also an object in javascript
console.log(typeof myfunction); // function
// symbol is unique identifier, it is used to create unique keys for objects

console.log(typeof id); // symbol

// STACK AND HEAO MEMORY
// STACK(PRIMITIVE DATA TYPES) : HEAP(NON PRIMITIVE DATA TYPES)
// STACK MEMORY : LIFO (LAST IN FIRST OUT) , FAST ACCESS, FIXED SIZE
let name = "rishabh" 
let anothername = name // copy of value is created in stack memory
anothername = "rishu" // copy of value is created in stack memory

// stack passed by value, heap passed by reference

let usr = {
    email:"cjus@gmail.com",
    password:"123456",
}

let usr2 = usr // reference of object is created in stack memory, value in heap memory

usr.email="xyz@gmail.com" // value in heap memory is changed
console.log (usr,usr2);