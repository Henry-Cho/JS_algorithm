/**
 * @param {character[][]} board
 * @return {number}
 */
 const checkAllDirection = (board, row, col, dir) => {
    let is_B_block = false;
    
    // north
    if (dir === "nor") {
        for (let i = row - 1; i >= 0; i--) {
            if (board[i][col] === "B") {
                is_B_block = true;
            }
            if (board[i][col] === "p" && !is_B_block) {
                return true;
            }
        }
    }
    
    // south
    if (dir === "sou") {
        for (let i = row + 1; i < board.length; i++) {
            if (board[i][col] === "B") {
                is_B_block = true;
            }
            if (board[i][col] === "p" && !is_B_block) {
                return true;
            }
        }
    }
    
    // east
    if (dir === "eas") {
        for (let i = col + 1; i < board[row].length; i++) {
            if (board[row][i] === "B") {
                is_B_block = true;
            }
            if (board[row][i] === "p" && !is_B_block) {
                return true;
            }
        }
    }
    
    // west
    if (dir === "wes") {
        for (let i = col - 1; i >= 0; i--) {
            if (board[row][i] === "B") {
                is_B_block = true;
            }
            if (board[row][i] === "p" && !is_B_block) {
                return true;
            }
        }
    }
    
    return false;
}

var numRookCaptures = function(board) {
    let row, col;
    let foundRook = false;
    for (let i = 0; i < board.length; i++) {
        if (foundRook) {
            break;
        }
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "R") {
                foundRook = true;
                row = i;
                col = j;
                break;
            }
        }
    }
    
    // If there is no rook on the board
    if (!foundRook) {
        return 0;
    }
    
    // check all four directions
    let count = 0;
    
    // north
    if (checkAllDirection(board, row, col, "nor")) {
        ++count;
    }
    
    // south
    if (checkAllDirection(board, row, col, "sou")) {
        ++count;
    }
    
    // east
    if (checkAllDirection(board, row, col, "eas")) {
        ++count;
    }
    
    // west
    if (checkAllDirection(board, row, col, "wes")) {
        ++count;
    }
    
    return count;
    
};