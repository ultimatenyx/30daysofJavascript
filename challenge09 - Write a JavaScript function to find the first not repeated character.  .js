// **Challenge 9**  
// Write a JavaScript function to find the first not repeated character.  
// Sample arguments : 'abacddbec'  
// Expected output : 'e'

function firstNonRepeating(text){
    let mp = new Map();
    for(let i=0;i<text.length;i++){
        if(mp.has(text[i])){
            mp.set(text[i],mp.get(text[i])-1);
        }else{
            mp.set(text[i],1);
        }
    }
    for(let i=0;i<text.length;i++){
        if(mp.get(text[i])==1){
            return text[i];
        }
    }
    return -1;
}

let sample = 'abacddbec';
console.log(firstNonRepeating(sample));