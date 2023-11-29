// **Challenge 24**  
// Description:  
// Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.  
// Solution Approach:  
// Use a timer and clear it on each invocation to delay the function execution.  

function debounce(fun, delay){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { fun.apply(this, args); }, delay);
      console.log("debounce");
    };
  }
  function randomConsole(){
    console.log('A randomConsole was called');
  }
  const callDebounce = debounce(() => randomConsole(),3000);
  
  callDebounce();
  callDebounce();
  callDebounce();