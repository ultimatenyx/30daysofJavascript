// Challenge 12
// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

function gettime(){
    let date = new Date();
    console.log(date.toLocaleTimeString("en-US", { hour12: false }));    
}

let stop = setInterval(gettime,1000);

setTimeout(() => { clearInterval(stop);}, 10000);