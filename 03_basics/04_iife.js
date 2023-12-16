// Immediately Invoked Function Expression(IIFE)

// -> prevent global variable polluting 
// -> the function executes immediately

(function chai() {
    // named IIFE
    console.log('DB connected');
})();

(() => {
    console.log('DB connected again');
})();

( (me) => {
    // passing argument
    console.log(`name is ${me}`);
})('priyanshu');

