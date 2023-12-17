// for each loop 

const coding = ['ruby' , 'js' , 'java' , 'python', 'cpp'];

// coding.forEach( function(item) {
//     console.log(item);
// }) 

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item , index , arr) => {
//     console.log(item , index , arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languagefilename : "js"
    },
    {
        languageName : "java",
        languagefilename : "java"
    },
    {
        languageName : "python",
        languagefilename : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagefilename);
})