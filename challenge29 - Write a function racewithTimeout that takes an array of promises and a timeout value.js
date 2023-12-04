// **Challenge 29**  
// Description:  
// Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.  
// Solution Approach:  
// Use Promise.race and a timeout promise.

function raceWithTimeout(promises,timeout){
    const prom = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("Timeout"));
        },timeout);
    });
    return Promise.race([...promises,prom]);
}

let p1 = new Promise((resolve)=>{
    setTimeout(()=>resolve("Promise 1"),1000);
});
let p2 = new Promise((resolve)=>{
    setTimeout(()=>resolve("Promise 2"),2000);
});
raceWithTimeout([p1,p2],1500)
.then((res)=>console.log("Resolved : "+res))
.catch((error)=>console.error("Rejected :"+error.message));
raceWithTimeout([p1,p2],500)
.then((res)=>console.log("Resolved : "+res))
.catch((error)=>console.error("Rejected :"+error.message));