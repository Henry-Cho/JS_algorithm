/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let nNums = grid[i].filter((g) => g < 0);
        count += nNums.length;
    }
    return count;
};