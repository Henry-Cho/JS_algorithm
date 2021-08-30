
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    if (end === 0) {
        if (nums[0] < target) {
            return 1;
        }
        return 0;
    }

    if (nums[0] > target) {
        return 0;
    }

    if (nums[end] < target) {
        return end + 1;
    }
    
    while (start <= end) {
        let mid = Math.floor((end + start) / 2);

        console.log("ㅁㅣ드: ", mid);

        if (nums[mid] === target) {
            return mid;
        }
        
        if (nums[mid] > target) {
            console.log("미드가 타겟보다 클 때", nums[mid]);

            end = mid - 1;

            if (end < start) {
                return start;
            }
            console.log(start, end);
            if (start === end) {
                console.log("클 때", end);
                if (target <= nums[end]) {
                    return end;
                }
                return end + 1;
            }
        }
        else {
            start = mid + 1;
            if (start === end) {
                console.log("작을 때", end);
                if (target > nums[end]) {
                    return start + 1;
                }
                return start;
            }
        }
    }
};

console.log(searchInsert([3,5,7,9,10], 8));