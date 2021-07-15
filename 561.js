/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    return nums.sort((a,b) => a - b).reduce((acc, cur, idx) => {
        if (idx % 2 === 0) {
            return acc + cur;
        }
        else {
            return acc;
        }
    }, 0);
};