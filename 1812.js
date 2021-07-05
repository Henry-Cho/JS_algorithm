/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    let arr = [...coordinates];
    let rowEven = (arr[0].charCodeAt(0) - 97) % 2 === 0 ? true : false;
    let colEven = parseInt(arr[1]) % 2 === 0 ? true : false;
    
    if (rowEven && colEven) {
        return true;
    }
    else if (rowEven && !colEven) {
        return false;
    }
    else if (!rowEven && colEven) {
        return false;
    }
    else if (!rowEven && !colEven) {
        return true;
    }
};