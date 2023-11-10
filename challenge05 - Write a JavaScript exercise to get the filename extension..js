// ## Challenge 5: 
// Write a JavaScript exercise to get the filename extension.

function getFileExtension(filename){
    // attempt without native functions
    let ans = "",i;
    for(i=filename.length-1;i>0;i--){
        if(filename[i]=="."){
            break;
        }
    }
    for(let j=i+1;j<filename.length;j++){
        ans+=filename[j];
    }
    return ans;
}
// Sample filenames
let filenames = ['abcd.html','efgh.jpeg','hijk.png','lmno.bat'];
for(let i=0;i<filenames.length;i++){
    console.log(getFileExtension(filenames[i]));
}
