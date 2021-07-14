/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    let new_nums = new Set(nums);
    let ans = 0;
    
    new_nums = [...new_nums].sort((a,b) => a-b);
    
    if (new_nums.length === 1 && nums.length > 1) {
        return 0;
    }
    
    if (new_nums.length === 1 && nums.length === 1) {
        return nums[0];
    }
    
    let dic = {};
    
    for (let i = 0; i < new_nums.length; i++) {
        dic[new_nums[i]] = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === new_nums[i]) {
                dic[new_nums[i]] += 1;
            }
        }
        if (dic[new_nums[i]] === 1) {
            ans += new_nums[i];
        }
    }
    
    return ans;
};