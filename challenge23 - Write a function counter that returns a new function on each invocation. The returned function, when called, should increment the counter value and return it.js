// **Challenge 23**
// Problem : Closure Challenge
// Description:
// Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.
// Solution Approach:
// Utilize closure to maintain the state of the counter.

let count=0;
function counter(){
    return (function(){count++});
}

let ret = counter();
ret();
console.log(count);
ret();
console.log(count);
ret();
console.log(count);
