// Running Sum of 1d Array

var runningSum = function(nums) {
    let new_nums = [];
   for (let i = 0; i < nums.length; i++) {
       new_nums.push(nums[i]);
       for (let j = 0; j < i; j++) {
           new_nums[i] += nums[j];
       }
   }
   return new_nums;
};

console.log(runningSum([1,2,3,4]));