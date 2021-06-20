/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let firstHalf = [];
     let secondHalf = [];
     let result = [];
     
     for (let i = 0; i < nums.length; i++) {
         if (i > n - 1) {
             secondHalf.push(nums[i]);
             continue;
         }
         firstHalf.push(nums[i]);
     }
     
     for (let i = 0; i < n; i++) {
         result.push(firstHalf[i]);
         result.push(secondHalf[i]);
     }
     
     return result;
 };