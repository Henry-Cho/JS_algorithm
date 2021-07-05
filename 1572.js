/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let answer = [];
    let count = 0;
    let isOdd = mat.length % 2 !== 0 ? true : false;
    for (let i = 0; i < mat.length; i++) {
        answer.push(mat[i][0 + count]);
        if (isOdd && i === parseInt(mat.length / 2)) {
            ++count;
            continue;
        }
        answer.push(mat[i][mat.length - 1 - count])
        ++count;
    }
    
    return answer.reduce((a, b) => a + b);
};
