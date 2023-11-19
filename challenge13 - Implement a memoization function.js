// **Challenge 13**
// Problem Statement: Implement a memoization function.
// Description: Write a function that takes a function as its argument and returns a memoized version of the function.
// Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.


let A=10; // print 10th fibo number. can be replaced with any number

let dp = new Array(A+1).fill(-1);
dp[0]=0;dp[1]=1;
function printnthfib(n){
    if(n<=1) return n;
    if(dp[n]==-1){
        dp[n] = printnthfib(n-1)+printnthfib(n-2);
    }
    return dp[n];
}


console.log(printnthfib(A));