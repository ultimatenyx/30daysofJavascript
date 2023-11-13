// Challenge 8
//  Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

let subsetlen = 2;
let input = [1,2,3];

function printAllSubsets(A,subsetlen){
    let ans = [];
        A.sort((a, b) => b - a);
        function helper(arr, i, curr) {
            if(i == arr.length) {
                return;
            }
            curr.push(arr[i]);
            if(curr.length>=subsetlen)
                ans.push(curr.slice());
            helper(arr, i + 1, curr);
            curr.pop();
            helper(arr, i + 1, curr);
        }
        helper(A, 0, []);

        return ans;
}
console.log(printAllSubsets(input,subsetlen));