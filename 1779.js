/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let valid_arr = points.filter((p) => p[0] === x || p[1] === y);
    
    if (valid_arr.length === 0) {
        return -1;
    }
    
    valid_arr.sort((a,b) =>
        (Math.abs(x - a[0]) + Math.abs(y - a[1])) - (Math.abs(x - b[0]) + Math.abs(y - b[1])))
                   
    let smallest = valid_arr[0];
   
    let ans = points.findIndex((a) => a[0] === smallest[0] && a[1] === smallest[1]);
    
    return ans;
    
};