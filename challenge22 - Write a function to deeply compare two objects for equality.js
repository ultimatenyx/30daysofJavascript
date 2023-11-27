// **Challenge 22**  
// Problem Statement: Write a function to deeply compare two objects for equality.  
// Description: Given two objects, the function should return true if they are deeply equal and false otherwise.  
// Solution Approach: Recursively compare properties of both objects.  
let a = {a:"1",b:"2",c:"3"};
let b = {a:"1",b:"2",c:"3"}; // same as a
let c = {a:"3",b:"2",c:"1"}; // diff values
let d = {d:"3",b:"2",c:"1"}; // diff key
let e = {d:"3",b:"2",c:"1",a:{a:1,b:2}}; //nested
let f = {d:"3",b:"2",c:"1",a:{a:1,b:3}}; //nested with diff values
let g = {d:"3",b:"2",c:"1",a:{d:1,b:3}}; //nested with diff keys

function deepCompare(a,b){
    if(Object.keys(a).length!=Object.keys(b).length)
        return false;
    for(let key in a){
        if(typeof a[key] == 'object'){
            return deepCompare(a[key],b[key]);
        }else{
            if(b.hasOwnProperty(key)){
                if(a[key]!=b[key]){
                    return false;
                }
            }else{
                return false;
            }
        }
    }
    return true;
}
console.log(deepCompare(a,b));
console.log(deepCompare(c,b));
console.log(deepCompare(c,d));
console.log(deepCompare(d,e));
console.log(deepCompare(e,f));
console.log(deepCompare(f,f));
console.log(deepCompare(g,f));