// 1403. Minimum Subsequence in Non-Increasing Order
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    nums.sort((a,b) => b - a);
    
    let queue = [...nums];
    let max = 0;
    let ans = [];
    
    while (max <= queue.reduce((a, b) => a+b, 0)) {
        max += queue[0];
        ans.push(queue.shift());
    }
    
    return ans;
};