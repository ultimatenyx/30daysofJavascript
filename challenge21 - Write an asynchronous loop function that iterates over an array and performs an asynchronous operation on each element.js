// **Challenge 21**  
// Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.  
// Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.  
// Solution Approach: Use async/await within a for...of loop.  

function longtask(elem){
    setTimeout(()=>console.log(elem),1000);
}
let arr = [1,2,3,4,5,6];

async function printArr(){
    for(const elem of arr){
        await longtask(elem);
    }
}

printArr();