// **Challenge 30**
// Description:
// Implement a throttle function that ensures a given function is not called more than once in a specified time interval.
// Solution Approach:
// Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.

function throttle(func, delay){
    let prev=0;
    return function(){
        let now = new Date().getTime();
        console.log("Expected Delay:",delay,";CurrentTime:",now-prev,";Timestamp:",new Date());
        if(now-prev>delay){
            prev = now;
            return func(arguments);
        }
    }
}

const msg = () => console.log("Hello World");
const throttledMsg = throttle(msg,2000); // Function to run only once per 2000ms
let id = setInterval(throttledMsg,500);  // Function called every 500ms

setTimeout(()=>clearInterval(id),6500); // Stopping the function after 6500ms. Expected to run thrice