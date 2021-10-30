/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    let ans = [];
    
    for (let i = 0; i < original.length; i+= n) {
        let sub = original.slice(i, i + n);
        ans.push(sub);
    }
    return ans.length !== m || ans[0].length !== n ? [] : ans;
};