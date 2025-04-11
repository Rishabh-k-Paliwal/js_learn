let str1 = "hello world";
let str2 = "hello world";

let str3 = str1 + str2; // string concatenation

console.log("1"+2); // "12"
console.log(1+2); // 3
console.log(1+"2"); // "12"
console.log(1+2+"3"); // "33
console.log( + true); // 1
console.log( + false); // 0
console.log( "high" + true); // "hightrue"
console.log( true + 1 + ""); // "true1"
console.log( true + 1 ); // 2


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"