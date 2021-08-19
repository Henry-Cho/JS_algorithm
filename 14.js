/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // when strs has just one element
    if (strs.length === 1) {
        return strs[0];
    }
    
    let longest = [...strs[0]];
    
    for (let i = 1; i < strs.length; i++) {
        // when strs[i] has an element but an empty string
        if (strs[i] === "") {
            return "";
        }
        for (let j = 0; j < strs[i].length; j++) {
            // when strs[i]'s length is longer than longest
            if (!longest[j]) {
                break;
            }
            // found the point where each letter in strs[i] and longest is not matched            
            if (longest[j] !== strs[i][j]) {
                longest = longest.slice(0, j);
                break;
            }
            // when strs[i]'s length is shorter than longest
            if (!strs[i][j+1]) {
                longest = longest.slice(0, j+1);
                break;
            }
        }
    }
    
    return longest.join("");
};