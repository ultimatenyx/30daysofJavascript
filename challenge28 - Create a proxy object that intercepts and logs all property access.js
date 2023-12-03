// **Challenge 28**  
// Description:  
// Create a proxy object that intercepts and logs all property access.  
// Solution Approach:  
// Use the Proxy object to create a wrapper around another object.  

const target = {
    message1: "hello",
    message2: "world",
  };
  
  const handler = {
    get(target, prop, receiver) {
      console.log("Log: Property Accessed: "+prop);
      return Reflect.get(...arguments);
    },
  };
  
  const proxy = new Proxy(target, handler);
  
  console.log(proxy.message1); 
  console.log(proxy.message2); 
  