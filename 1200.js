/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b);
    let min = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i+1] - arr[i] < min) {
            min = arr[i+1] - arr[i];
        }
    }
    
    let ans = [];
    
    arr.forEach((a, idx) => {
        if (idx === arr.length - 1) {
            return;
        }
        if (arr[idx + 1] - a === min) {
            ans.push([a, arr[idx + 1]]);
        }
    })
    
    return ans;
};