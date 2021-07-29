/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        // console.log(matrix[i]);
        matrix[i].sort((a,b) => a - b);
        console.log(matrix[i]);
    }
    
    let ans = [];
    
    for (let i = 0; i < matrix.length; i++) {
        ans.push(matrix[i][0]);
    }

    console.log(ans);
    
    return [Math.max(...ans)];
};

console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));