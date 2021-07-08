/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    n = nums.length / 2;

    let set_nums = new Set(nums);
    set_nums = [...set_nums];
    for (let i = 0; i < set_nums.length; i++) {
        let count = nums.filter((s) => s === set_nums[i]).length;
        if (count === n) {
            return set_nums[i];
        }
    }
  
};