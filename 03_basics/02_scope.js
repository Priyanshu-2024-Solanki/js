let a = 100;
const b = 200;
var c = 200;

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c); // it(var) does not obey global and block scope 

function one() {
    const username = "priyanshu";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // website is out of its scope
    two();
}
// one();

// +++++++++++++ interesting ++++++++++++

// addOne(5); // no error due to hoisting
function addOne(num) {
    return num + 1;
}

// addTwo(5); // error bcz function is stored in variable which is declared after function call
const addTwo = function(num) {
    return num + 2;
}