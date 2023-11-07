// ## Challenge 2:
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

function camelcase(str){
    let ans='';
    if(str.length>=1){
        ans = str[0].toUpperCase();
    }
    for(let i=0;i<str.length;i++){
        if(str[i]==' ' && (i+1)<str.length){
            ans += ' '+str[i+1].toUpperCase();
            i++;
        }else if(i>0){
            ans+=str[i];
        }
    }
    return ans;
}

let sample = 'the quick brown fox';
console.log(camelcase(sample));