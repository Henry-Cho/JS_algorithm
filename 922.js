/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var sortArrayByParityII = function(nums) {
    let ans = [];
    let idx = 0;
    
    while (nums.length !== 0) {
        let target = 0;
        if (idx % 2 === 0) {
            target = nums.findIndex((n) => n % 2 === 0);
            ans.push(nums[target]);
            nums.splice(target, 1);
        }
        else {
            target = nums.findIndex((n) => n % 2 !== 0);
            ans.push(nums[target]);
            nums.splice(target, 1);
        }

        console.log("target", target);
        console.log(nums);
        console.log(ans);

        ++idx;
    }
    
    return ans;
};

sortArrayByParityII([4,2,5,7]);