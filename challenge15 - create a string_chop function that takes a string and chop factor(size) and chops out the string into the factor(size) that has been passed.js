// **Challenge 15**
// Problem Description -create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
// Test Data :
// console.log(string_chop('Scaler'));
// console.log(string_chop('Scaler',2));
// ["Scaler"]
// ['Sc' , 'al' ,'er']
function string_chop(mystr, piecewidth){
    let ans=[];
    if(!piecewidth){
        ans.push(mystr);
        return ans;
    }
    for(let i=0;i<mystr.length;i=i+piecewidth){
        let temp="";
        for(let j=i;j<i+piecewidth;j++){
            temp+=mystr[j];
        }
        ans.push(temp);
    }
    return ans;
}
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
console.log(string_chop('Scaler',3));