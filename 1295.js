/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let answer = nums.toString().split(",");
    
    let evenDigits = answer.filter((a) => a.length % 2 === 0);
    
    return evenDigits.length;
};