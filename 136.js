/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let obj = {};
    
    nums.forEach((n) => {
        if (!obj[n]) {
            obj[n] = 1;
            return;
        }
        obj[n]+=1;
    })
    
    const keys = Object.keys(obj).filter((a) => obj[a] === 1);
    
    return keys[0];
};