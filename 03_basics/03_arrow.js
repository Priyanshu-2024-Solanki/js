// this => points to current context 

const user = {
    username: "priyanshu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// console.log(user.welcomeMessage());
// user.username = "shyam";
// console.log(user.welcomeMessage());

// console.log(this);

// function chai() {
//     let username = "hitesh";
//     console.log(this.username);
// }
// chai(); // undefined

// const chai = function() {
//     let username = "sam";
//     console.log(this.username);
// }
// chai(); // undefined 

// const chai = () => {
//     let username = "sam";
//     console.log(this.username);
// }
// chai(); // undefined 

// we cannot use (this) keyword in these functions

// arrow functions

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// implicit return 
// const addTwo = (num1 , num2) => num1 + num2;
// const addTwo = (num1 , num2) => (num1 + num2);
const addTwo = (num1 , num2) => ({username : "priyanshu"});

console.log(addTwo(3,4));
