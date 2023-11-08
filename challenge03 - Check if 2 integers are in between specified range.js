// ## Challenge 3:
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

function checkTwoIntegers(a,b){
    let flag = false;
    if(a>=50 && a<=99){
        flag=true;
    }
    if(!flag && (b>=50 && b<=99)){
        flag=true;
    }
    return flag;
}

let one = 49;
let two = 99;
console.log(checkTwoIntegers(one,two));