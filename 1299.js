// 1299번 문제
/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let ans = arr.map((a, idx) => {
        if (idx === arr.length - 1) {
            return -1;
        }
        return Math.max(...arr.slice(idx+1));
    })
    
    return ans;
};