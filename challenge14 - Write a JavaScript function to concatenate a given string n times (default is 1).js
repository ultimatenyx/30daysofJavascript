// Challenge 14

// Write a JavaScript function to concatenate a given string n times (default is 1). Go to the editor
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));

// Outputs
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

function repeat(mystr,num){
    let temp=mystr;
    for(let i=0;i<num-1;i++){
        temp+=mystr;
    }
    return temp;
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));