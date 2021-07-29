/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    let idx_arr = [...s].map((i, idx) => {
        if (i === c) {
            return idx;
        }
    });
                             
    idx_arr = idx_arr.filter((i) => i !== undefined);
    idx_arr.unshift(0);
    
    return idx_arr;
};

console.log(shortestToChar("loveleetcode", "e"));

console.log(shortestToChar("aaab", "b"));