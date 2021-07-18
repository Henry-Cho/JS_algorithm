/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    let expected = [...heights];
    console.log(heights);
    expected.sort((a,b) => a - b);
    
    console.log("heights", heights);
    console.log("expected" ,expected);

    let ans = heights.filter((h, idx) => h !== expected[idx]);
    
    return ans.length;
};

console.log(heightChecker([1,1,4,2,1,3]));