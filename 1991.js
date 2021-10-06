/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMiddleIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let left = 0;
        let right = 0;
        if (i === 0) {
            console.log("index 0");
            if (nums.slice(i+1).reduce((a,b) => a + b, 0) === 0) {
                console.log(nums.slice(i+1).reduce((a,b) => a + b, 0));
                return i;
            }
        }
        else if (i === nums.length - 1) {
            console.log("index end");
            if (nums.slice(0, nums.length - 1).reduce((a,b) => a + b, 0) === 0) {
                console.log(nums.slice(0, nums.length - 1).reduce((a,b) => a + b, 0));
                return i;
            }
        }
        else {
            left = nums.slice(0, i).reduce((a,b) => a + b, 0);
            right = nums.slice(i+1).reduce((a,b) => a + b, 0);

            console.log(left);
            console.log(right);
            
            if (left === right) {
                return i;
            }
        }
    }
    return -1;
};

console.log(findMiddleIndex([2,3,-1,8,4]))