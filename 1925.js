/**
 * @param {number} n
 * @return {number}
 */
 var countTriples = function(n) {
    if (n < 5) {
        return 0;
    }
    
    let count = 0;
    
    for (let i = n; i > 0; i--) {
        for (let j = i - 1; j > 0; j--) {
            let k = Math.pow(i, 2) - Math.pow(j, 2);
            
            if (Math.pow(Math.floor(Math.sqrt(k)), 2) === k) {
                ++count;
            }
        }
    }
    
    return count;
};