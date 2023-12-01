// **Challenge 26**
// Description:
// Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
// Solution Approach:
// Combine map, filter, and reduce array methods.

let arr = [1,2,3,4,5,6,7];

function calculateTotal(arr){
    const even = arr.filter((num)=>num%2==0);
    const odd = arr.filter((num)=>num%2==1);
    const oddsq = odd.map((num)=>num*num);
    const evensum = even.reduce((accumulator, currentValue) => accumulator + currentValue)
    return oddsq.reduce((accumulator, currentValue) => accumulator + currentValue,evensum);
}

console.log(calculateTotal(arr));