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
