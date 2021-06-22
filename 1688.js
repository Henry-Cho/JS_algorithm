/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    let match = 0;
    if (n < 2) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    while (n !== 2) {
        if (n % 2 === 0) {
            match += parseInt(n / 2);
            n = parseInt(n / 2);
        }
        else {
        match += parseInt(n / 2);
        n = parseInt(n / 2) + 1; 
        }
    }
    return (match + 1);
};