// singleton 

// object literals 

// using symbol as key 
const mySym = Symbol("key");

const JsUser = {
    name: "Nakul",
    age: 21,
    [mySym]: "mykey",
    "full name": "Nakul Solanki",
    location: "Ghaziabad",
    email: "nakul@google.com",
    isLoogedIn: false,
    lastLoggedInDays: ["Monday" , "Saturday"]
};

// two ways to access 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // only way to access if key is a string 
// console.log(typeof JsUser[mySym]);

JsUser.email = "nakul@chatGpt.com";
// Object.freeze(JsUser);
JsUser.email = "nakul@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
};
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());