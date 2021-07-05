/**
 * @param {number[]} nums
 * @return {number}
 */
 const makeBiggerByOne = (prev, num) => {
    // return 할 때 배열을 반환할 거임 0번째에는 count, 1번째에는 바꾸는 값
        
        if (prev === num) {
            return [1, num + 1];
        }
        return [(prev - num + 1), (prev + 1)];
    }
    
    var minOperations = function(nums) {
        let answer = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] >= nums[i+1]) {
                answer += makeBiggerByOne(nums[i], nums[i+1])[0];
                nums[i+1] = makeBiggerByOne(nums[i], nums[i+1])[1];
            }
        }
        
        return answer;  
    };