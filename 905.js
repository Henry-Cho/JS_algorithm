/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let even = nums.filter((n) => n % 2 === 0);
    let odd = nums.filter((n) => n % 2 !== 0);
    
    return even.concat(odd);
};