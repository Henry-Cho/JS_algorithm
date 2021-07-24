/**
 * @param {number[][]} grid
 * @return {number}
 */

 const isLand = (val) => {
    if (val === 1) {
        return true;
    }
    return false;
}

var islandPerimeter = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (isLand(grid[i][j])) {
                count += 4;
                // south
                if (i + 1 <= grid.length - 1 && isLand(grid[i + 1][j])) {
                    --count;
                }
                // south
                if (i - 1 >= 0 && grid[i - 1][j] && isLand(grid[i - 1][j])) {
                    --count;
                }
                // east
                if (j <= grid[i].length - 1 && grid[i][j+1] && isLand(grid[i][j+1])) {
                    --count;
                }
                // west
                if (j >= 0 && grid[i][j-1] && isLand(grid[i][j-1])) {
                    --count;
                }
            }
        }
    }
    
    return count;
};