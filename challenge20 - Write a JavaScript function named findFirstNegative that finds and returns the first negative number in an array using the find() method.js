// **Challenge 20**
// Problem Description:
// Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.
// Inputs:
// An array of numbers.
// Outputs:
// A number representing the first negative number in the array or undefined if there are no negative numbers.
// Hints:
// The find() method returns the value of the first element in the array that satisfies the provided testing function.
// Solution Approach:
// Use the find() method and provide a callback that checks if the number is negative.

function findFirstNegative(num){
    return num<0;
}
const input1 = [1,2,3,-1,4,5];
const input2 = [1,2,3,4,5];

console.log(input1.find(findFirstNegative));
console.log(input2.find(findFirstNegative));