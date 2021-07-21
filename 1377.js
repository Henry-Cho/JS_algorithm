/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function(mat, k) {
    let obj = {};
     
     mat.forEach((m, idx) => {
         obj[idx] = m.reduce((a,b) => a + b, 0);
     })

     console.log(obj);
     
     let ans = [...Object.keys(obj)].sort((a, b) => obj[a] - obj[b]);

     console.log(ans);
     
     return ans.slice(0, k);
 };

console.log(kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3));