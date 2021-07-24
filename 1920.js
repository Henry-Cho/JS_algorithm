/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    let ans = nums.map((a, idx) => nums[nums[idx]]);
    
    return ans;
};