// 1389번 문제
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        answer.splice(index[i], 0, nums[i]);
    }
    return answer;
};