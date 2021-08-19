/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let ans = [];
    for (let i = 0; i < rowIndex + 1; i++) {
        let arr = [];
        for (let j = 0; j < i + 1; j++) {   
            if (i >= 2 && j > 0 && j < i) {
                arr.push(ans[i - 1][j - 1] + ans[i - 1][j]);
                continue;
            }
            arr.push(1);
        }
        ans.push(arr);
    }
    
    return ans[rowIndex];
};

console.log(getRow(4));