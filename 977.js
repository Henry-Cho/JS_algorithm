//977. Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let ans = nums.map((n) => Math.pow(n, 2));
    
    return ans.sort((a, b) => a-b);
};