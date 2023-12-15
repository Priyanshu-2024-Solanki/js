// Dates 

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023 , 0 , 23);
// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3);
// let myCreatedDate = new Date("2023-01-23"); // yy-dd-mm
let myCreatedDate = new Date("01-23-2023"); // mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // in milliseconds
// console.log(Math.floor(Date.now()/1000)); // convert in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long",
});