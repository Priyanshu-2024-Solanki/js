const score = 400;
// console.log(score);
// console.log(typeof score);

// define it is as number 
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

let otherNumber = 23.8914;
// console.log(otherNumber.toPrecision(3)); // 23.9
otherNumber = 123.8914;
// console.log(otherNumber.toPrecision(3)); // 124
otherNumber = 1123.8914
// console.log(otherNumber.toPrecision(3)); // 1.12e+3

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// +++++++++++++++  Maths ++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,3,6,8));
// console.log(Math.max(2,3,6,8));

// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10)+1);

// ######
// to generate random numbers between min and max

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random()*(max-min+1)+min));