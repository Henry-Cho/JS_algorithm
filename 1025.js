/**
 * @param {number} n
 * @return {boolean}
 */
 var divisorGame = function(n) {
    let a = [];
    let b = [];
    
    while (n !== 1) {
        if (a.length === b.length) {
            a.push(1);
        }
        else {
            b.push(1);    
        }
        n = n - 1;
    }
    
    if (a.length === b.length) {
        return false;
    }
    return true;
};