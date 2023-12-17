const userEmail = "n@gmail.com";

// if(userEmail) {
//     console.log("Got user email");
// }
// else {
//     console.log("Don't have user email");
// }

// empty string -> false 
// empty array  -> true

// falsy values 

// false , 0 , -0 , BigInt 0n , "", null , undefined , NaN
// all values expect these are truthy values

// truthy values 
// some interesting truthy
// "0" , 'false' , " ", [] , {} , function(){} (empty function)


// check if an object is empty

const emptyObj = {};

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined  

let val1;
// val1 = 10 ?? 20; // 10
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; // 15

// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");