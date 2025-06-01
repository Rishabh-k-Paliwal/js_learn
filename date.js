const currentDate = new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

console.log(currentDate) // current date and time
 console.log(currentDate.toString()) // current date and time in string format
console.log(currentDate.toDateString()) // current date in string format
console.log(currentDate.toTimeString()) // current time in string format
console.log(currentDate.toLocaleString()) // current date and time in local format

const myBirthday = new Date(2004, 1, 13 , 4 ,30)
const myBirthday2 = new Date("2004-02-13T04:30:00")
console.log(myBirthday.toLocaleString()) // My birthday in local format
let MyTimeStamp = Date.now()
console.log(MyTimeStamp) // current timestamp in milliseconds
console.log(myBirthday.getTime()) // My birthday in milliseconds
console.log(Math.floor(Date.now()/1000)) // convert timestamp to seconds 

let newDate = new Date()

console.log(newDate.getFullYear()) // current year
console.log(newDate.getMonth()) // current month (0-11)
console.log(newDate.getDate()) // current date (1-31)
console.log(newDate.getDay()) // current day (0-6)
console.log(newDate.getHours()) // current hours (0-23)
console.log(newDate.getMinutes()) // current minutes (0-59)
console.log(newDate.getSeconds()) // current seconds (0-59)
console.log(newDate.getMilliseconds()) // current milliseconds (0-999)
console.log(newDate.getTimezoneOffset()) // current timezone offset in minutes
console.log(newDate.getUTCDate()) // current date in UTC (1-31)

newDate.toLocaleString('default', { 
    weekday: 'long', // long, short, narrow
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    day: 'numeric', // numeric, 2-digit
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
    timeZoneName: 'short' // short, long
})

