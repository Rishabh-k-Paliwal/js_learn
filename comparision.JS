let value = 3
let value2 = -4

console.log(2**3); // 8
console.log(2**-3); // 0.125

console.log(35%2); // 1

console.log(+true); // 1
console.log(+""); // 0

let num1,num2,num3
num1=num2=num3=2+2; // 4

// prefix , postfix increment and decrement


let x = 3
let y = x++ // y = 3 , x = 4
console.log(`x:${x}, y:${y}`) // x:4, y:3

let a = 3
let b = ++a // a = 4 , b = 4
console.log(`a:${a}, b:${b}`) // a:4, b:4

let c = 3
let d = --c // c = 2 , d = 2
console.log(`c:${c}, d:${d}`) // c:2, d:2

let e = 3
let f = e-- // e = 2 , f = 3
console.log(`e:${e}, f:${f}`) // e:2, f:3

// equality operators
console.log(1 == '1') // true , value is same but type is different
console.log(1 === '1') // false , value is same but type is different
console.log(`x:${x}, y:${y}`);

console.log(2>1) // true
console.log("02">1) // true , string is converted to number
console.log("02"==2) // true , string is converted to number
console.log("02"===2) // false , string is not converted to number
console.log("null"==0) // false , string is not converted to number
console.log(null==0) // false , null is not converted to number
console.log(null>0) // false , null is not converted to number
console.log(null+1) // 1 , null is converted to number
