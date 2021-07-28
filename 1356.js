//1356. Sort Integers by The Number of 1 Bits
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let new_arr = arr.map((a) => a.toString(2));
    
    new_arr.sort((a, b) => {
        let a1 = [...a].filter((i) => i === "1").length;
        let b1 = [...b].filter((i) => i === "1").length;
        if (a1 === b1) {
            return parseInt(a, 2) - parseInt(b, 2);
        }
        return a1 - b1;
    })
    
    let ans = new_arr.map((a) => parseInt(a, 2));
    
    return ans;
};