/**
 * @param {number[][]} mat
 * @return {number}
 */
const rowCheck = (mat, i) => {
    let num_one = mat[i].filter((a) => a === 1).length;
    
    if (num_one > 1 || num_one === 0) {
        return -1;
    }
    
    return mat[i].indexOf(1);
}

const colCheck = (mat, j) => {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][j] === 1) {
            ++count;
            if (count > 1) {
                return false;
            }
        }
    }
    
    return true;
}

var numSpecial = function(mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        let col_idx = rowCheck(mat, i);
        if (col_idx !== -1) {
            if (colCheck(mat, col_idx)) {
                ++count;
            }
        }
    }
    
    return count;
};