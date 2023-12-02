// **Challenge 27**  
// Description:  
// Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.  
// Solution Approach:  
// Use the function\* syntax for generator functions and the yield keyword.  

function* gen(start,end){
    while(start<end){
        yield start;
        start++;
    }
}
const iterator = gen(2,8);
while(!iterator.next().done){
    console.log(iterator.next().value);
}
