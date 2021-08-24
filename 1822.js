/**
 * @param {number[]} nums
 * @return {number}
 */

 const signFunc = (num) => {
    if (num > 0) {
        return 1;
    }
    else if (num < 0) {
        return -1;
    }
    else {
        return 0;
    }
}

var arraySign = function(nums) {
    let ans = nums.reduce((a,b) => a * b);
    
    return signFunc(ans);
};