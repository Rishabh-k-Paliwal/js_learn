const name = "Rishabh"
const repocount = 100

// string interpolation
const message = `Hello my name is ${name} and I have ${repocount} repo` // template literal


const game_name = new String("abcdef"); // String object

const game_name2 = "abcdef"; // String primitive

console.log(game_name[0]); // a
console.log(game_name2[0]); // a
console.log(game_name.__proto__); // String.prototype
console.log(game_name.substring(0, 3)); // abc
console.log(game_name.slice(-1, 6)); // f

console.log(game_name.charAt(0)); // a

const newStringOne = "   hitesh  "
console.log(newStringOne.trim()) //hitesh
console.log(newStringOne);//   hitesh

// URL encoding, also known as percent encoding, is a method of converting any data into a format suitable for transmission over the internet using only ASCII characters. It replaces characters that are not allowed in URLs with escape sequences like "%20" (for a space). 
const url = "https://www.youtube.com/my%20video"
console.log(url.replace('%20','-')) 
console.log(game_name.split('b'))