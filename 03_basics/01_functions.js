function sayMayName() {
    console.log("N");
    console.log("A");
    console.log("K");
    console.log("U");
    console.log("L");
}

// sayMayName();

function addTwoNumbers(number1 , number2) {
    return number1 + number2;
}
// console.log(addTwoNumbers(3,4));
// console.log(addTwoNumbers(3,'a'));
// console.log(addTwoNumbers(3,null));

// function loginUserMessage(userName) {
//     if(userName === undefined) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${userName} just logged in`;
// }
// console.log(loginUserMessage("Priyanshu"));
// console.log(loginUserMessage());

function loginUserMessage(userName = "Shree Hari") {
    if(userName === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in`;
}

// console.log(loginUserMessage("Ram"));
// console.log(loginUserMessage());

// here ...num1 is known as rest operator
function calculateCartPrice(val1 , val2 , ...num1) {
    return num1;
}

// console.log(calculateCartPrice(100,200,300,400,500));

const user = {
    username: "nakul",
    price: 199,
}

function handleObjects(anyObject) {
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObjects(user);
// handleObjects({
//     username: "sam",
//     price: 399,
// });

const myNewArray = [100 , 200 , 300 , 400];
function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100 , 200 , 300 , 400]));
