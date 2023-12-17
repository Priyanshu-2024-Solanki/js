const coding = ["js" , "ruby" , "java" , "python" , "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);

const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

// const newNums = myNums.filter( (item) => (item>4));
// const newNums = myNums.filter( (item) => { return (item>4)}); // if curly braces then use return keyword
// console.log(newNums);

const newNums = [];
myNums.forEach( (item) => {
    if(item > 4) {
        newNums.push(item)
    }
})
console.log(newNums);