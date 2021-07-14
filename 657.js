/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let arr = [...moves];
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "U") {
            ++y;
        }
        else if (arr[i] === "D") {
            --y;
        }
        else if (arr[i] === "R") {
            ++x;
        }
        else {
            --x;
        }
    }
    if (x === 0 && y === 0) {
        return true;
    }
    return false;
};