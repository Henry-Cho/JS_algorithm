/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 const checkDia = (matrix, i, j) => {

    if (matrix[i - 1][j - 1] !== matrix[i][j]) {
        return false;
    }
// 마지막까지 간다는 얘기는 체크가 끝났다는 의미니까 true 반환
    if (i - 1 <= 0) {
        return true;
    }
// 재귀함수로 아래에서 위까지 대각선 방향으로 체크하며 올라간다.
    checkDia(matrix, i - 1, j - 1);
}

var isToeplitzMatrix = function(matrix) {
    // 마지막 줄부터 위로 올라가면서 검사하는 것이다.
    for (let i = 1; i < matrix[0].length; i++) {
        for (let j = matrix.length - 1; j > 0; j--) {
            if (!checkDia(matrix, j, i)) {
                return false;
            }
        }
    }
    return true;
};

console.log(isToeplitzMatrix(
    [[1,2],[2,2]]
));