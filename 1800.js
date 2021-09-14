/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let max = 0;
    
    if (nums.length <= 1) {
        return nums[0];
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] >= nums[j + 1]) {
                sum += nums[j]
                break;
            }
            sum += nums[j];
            if (i === nums.length - 1) {
                sum += nums[j];
            }
        }
        if (sum > max) {
            max = sum;
        }
    }
    
    return max;
};