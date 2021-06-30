/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) {
    // matrix setting
    let matrix = [];
    for (let i = 0; i < m; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(0);
        }
        matrix.push(arr);
    }
    // console.log(`This is the initial matrix:`);
    // console.log(matrix);
    // iterating over indices
    for (let i = 0; i < indices.length; i++) {
        let rowIdx = indices[i][0];
        let columnIdx = indices[i][1];
        
        for (let j = 0; j < matrix[rowIdx].length; j++) {
            matrix[rowIdx][j] += 1;
        }
        
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][columnIdx] += 1;
        }
    }
    
    // console.log("after indices", matrix);
    let answer = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 !== 0) {
                answer += 1;
            }
        }
    }

    return answer;
};

// console.log(oddCells(2, 3, [[0,1],[1,1]]));