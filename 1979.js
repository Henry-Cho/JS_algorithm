/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    nums.sort((a,b) => a - b);
    let small = nums[0];
    let large = nums[nums.length - 1];
    
    while(small!=0){
        let n = large % small;
        large = small;
        small = n;
    }
    return large;

};