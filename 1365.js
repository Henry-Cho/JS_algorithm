/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        let increment_if_small = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j] && i !== j) {
                ++increment_if_small;
            }
        }
        answer.push(increment_if_small);
    }
    return answer;
};