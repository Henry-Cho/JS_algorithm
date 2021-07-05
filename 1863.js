/**
 * @param {number[]} nums
 * @return {number}
 */
function getXOR(arr) {
    if (arr.length === 0) {
        return 0;
    }

    if (arr.length === 1) {
        return arr[0];
    }
    arr = arr.toString();
    arr = arr.replace(",", "^");
    
    return eval(arr);
}

var subsetXORSum = function(nums) {
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        console.log("i 는 지금 ", i);
        for (let j = 0; j < nums.length; j++) {
            
        }
    }
    console.log(answer);
    return answer.reduce((a,b) => a + b);
};

subsetXORSum([5, 1, 6]);