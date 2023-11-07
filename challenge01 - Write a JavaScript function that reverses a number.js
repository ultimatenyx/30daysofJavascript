// Challenge 1:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example: 
// x = 32243;
// Expected Output: 34223

function reverseMyNum(num){
    let y=0;
    while(x>0){
        y=y*10+x%10;
        x=parseInt(x/10);
    }
    return y;
}
let x = 32243;
console.log(reverseMyNum(x));