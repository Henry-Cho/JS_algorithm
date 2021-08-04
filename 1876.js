/**
 * @param {string} s
 * @return {number}
 */

 const checkIfGood = (arr) => {
    let a = [...arr].sort();
    
    if (a[1] > a[0] && a[2] > a[0] && a[2] > a[1]) {
        return true;
    }
    return false;
}

var countGoodSubstrings = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length - 2; i++) {
        if (checkIfGood([s[i], s[i+1], s[i+2]])) {
            ++count;
        }
    }
    
    return count;
};