/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
 var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let center = [rCenter, cCenter];
    let ans = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (center[0] === i && center[1] === j) {
                continue;
            }
            ans.push([i, j]);
        }
    }
    
    ans.sort((a,b) =>
        (Math.abs(center[0] - a[0]) + Math.abs(center[1] - a[1])) - (Math.abs(center[0] - b[0]) + Math.abs(center[1] - b[1])))
    
    ans.unshift(center);
    
    return ans;
};