// Challenge 6
// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

function sumtriple(a,b){
    let sum = (a+b);
    if(a==b)
        return 3*sum;
    return sum;
}

console.log(sumtriple(10,4));
console.log(sumtriple(5,5));
console.log(sumtriple(1,10));