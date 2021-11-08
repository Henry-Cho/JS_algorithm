/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let obj = {};
    
    nums.forEach((e) => {
        if (obj[e] === undefined) {
            obj[e] = 1;
            return;
        }
        obj[e] += 1;
    })
    
    let ans = Object.values(obj).findIndex((o) => o > parseInt(nums.length / 2))
    
    return Object.keys(obj)[ans];
};