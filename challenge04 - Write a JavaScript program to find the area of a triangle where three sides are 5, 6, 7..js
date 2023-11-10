// ## Challenge 4 
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function area(s1,s2,s3){
    let sempem = (s1+s2+s3)/2;
    //Heron's formula
    return Math.sqrt(sempem*(sempem-s1)*(sempem-s2)*(sempem-s3));
}
let s1=5,s2=6,s3=7;
console.log(area(s1,s2,s3));