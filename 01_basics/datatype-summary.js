// Primitive 

// 7 types : String , Number , Boolean , null , undefined , symbol , bigInt 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId); // false 


// Refernce (Non Primitive)

// Array , Objects , Functions 

const heros = ["shaktiman" , "naagraj" , "doga"] // array 

let myObject = {
    name: "nakul",
    age: 21,
} // Object 

const myFunction = function() {
    console.log("hello world");
} // function 

// datatype   --   typeof returns
// ******************************

// 1) Primitive datatypes
// number     --   number
// string     --   string 
// boolean    --   boolean 
// null       --   object 
// undefined  --   undefined 
// symbol     --   symbol
// BigInt     --   bigInt 

// 2) Non - Primitive Datatypes
// Array      --   Object 
// Function   --   function 
// Object     --   object 

// ++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non-Primitive)
// primitive -> gives copy of object in stack
let myYoutubename = "noYouTube";

let anotherName = myYoutubename;
anotherName = "newYouTube";

console.log(myYoutubename);
console.log(anotherName);

// non-primitive -> gives reference of original object in heap 

let userOne = {
    email: "nakul@gmail.com",
    upi: "nakul@ybl",
}

let userTwo = userOne;

userTwo.email = "new@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// change in both 