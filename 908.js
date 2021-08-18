/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestRangeI = function(nums, k) {
    // 1 element
    if (nums.length === 1) {
        let max = nums[0] - k;
        let min = nums[0] + k;
        return max - min;
        
    }
    
    // 2 elements
    else if (nums.length === 2) {
        let max = Math.max(...nums) - k;
        let min = Math.min(...nums) + k;
        return max - min;
    }
    
    // more than 2
    else {
        let min = Math.min(...nums) + k;
        
        let max = Math.max(...nums);
        
        if (max - min <= k) {
            return 0;
        }
        else {
            max -= k;
            
            return max - min;
        }
    }
};