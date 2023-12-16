// const tinderUser = new Object(); // singleton
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "nakul",
            lastname: "solanki",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};
const obj4 = {5: "a" , 6: "b"};

// const obj3 = {obj1 , obj2};
// console.log(obj3); // this is not what we want 

// const obj3 = Object.assign({} , obj1 , obj2 , obj4);
// (target , source)

// it will be used most of the times 
const obj3 = {...obj1 , ...obj2 , ...obj4};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "n@gmail.com",
    },
    {
        id: 1,
        email: "n@gmail.com",
    },
    {
        id: 1,
        email: "n@gmail.com",
    },
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999" , 
    courseInstructor: "hitesh"
};

// if we want to acess courseInstructor we can do like course.courseInstructor but there is an alternate way also 

const {courseInstructor : instructor} = course 
// this way (instructor) can be used instead of writing (course.courseInstructor) each time 
console.log(instructor);
