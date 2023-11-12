// Challenge 7
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function checkIfFifty(a,b){
    if(a==50 || b==50 || (a+b)==50)
        return true;
    return false;
}

console.log(checkIfFifty(50,50)); //true
console.log(checkIfFifty(10,50)); //true
console.log(checkIfFifty(20,30)); //true
console.log(checkIfFifty(10,10)); //false