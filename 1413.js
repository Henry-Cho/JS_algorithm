/**
 * @param {number[]} nums
 * @return {number}
 */

var minStartValue = function(nums) {

    let int_val = 1;
    let sum = 1;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // console.log("썸", sum);
        if (sum < 1) {
            int_val += 1 - sum;
            // console.log("INT: ", int_val);
            sum += 1 - sum;
            // console.log("SUM", sum);
        }
    }
    
    return int_val;
};

// console.log(minStartValue([1,-2,-3]));