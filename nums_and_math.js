const score = 400
const score2 = new Number(400)
console.log(score) // 400
console.log(score2) // [Number: 400]
const string = new String("hello")
const string2 = "hello"
console.log(string) // [String: 'hello']
console.log(string2) // hello
console.log(typeof string) // object
console.log(typeof string2) // string
console.log(typeof score2) // object
console.log(typeof score) // number

console.log(score.toString())// "400"
console.log(score.toFixed(2))// "400.00"
console.log(score.toPrecision(2))// "4.0e+2"

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000
console.log(hundreds.toLocaleString('en-US')) // 1,000,000



// Maths.................

console.log(Math)
console.log(Math.abs)// absolute value
console.log(Math.abs(-4)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.ceil(4.1)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.max(1,2,3,4,5)) // 5
console.log(Math.min(1,2,3,4,5)) // 1
console.log(Math.random()) // random number between 0 and 1
console.log(Math.random()*10) // random number between 0 and 10
console.log(Math.floor(Math.random()*10)) // random number between 0 and 9
console.log(Math.floor(Math.random()*10)+1) // random number between 1 and 10
console.log(Math.sqrt(16)) // 4
console.log(Math.pow(2,3)) // 8
console.log(Math.PI) // 3.141592653589793

const min =10
const max = 20

console.log(Math.random()* (max-min+1) + min) // random number between 10 and 20
