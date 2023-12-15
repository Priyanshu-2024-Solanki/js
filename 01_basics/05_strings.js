const name = "Nakul";
const repoCount = 50;

// console.log(name + 50 + " Value");
// not a very good way 

// we can write something like
// this is known as string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("nakul-FC-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('n'));
// console.log(gameName.indexOf('C'));

const newString = gameName.substring(0,5);
// console.log(newString);
const anotherString = gameName.slice(-6 , 5);
// console.log(anotherString);

const newStringOne = "   nakul   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://nakul.com/nakul%20solanki";

// console.log(url.replace('%20' , '-'));
// console.log(url.includes('nakul'));

console.log(gameName.split('-'));