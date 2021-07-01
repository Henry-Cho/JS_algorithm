// 1913번 문제
/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxProductDifference = function(nums) {
    nums = nums.sort((a, b) => a - b);
    
    let max = [nums[nums.length - 1], nums[nums.length - 2]];
    let min = [nums[0], nums[1]];
    
    return (max[0] * max[1]) - (min[0] * min[1]);
};