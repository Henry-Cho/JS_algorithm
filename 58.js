/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let count = 0;
    
    let isLetter = /^[A-Z]$/i.test(s[s.length - 1]) ? true : false;
    let last_idx = s.length - 1;
    
    if (isLetter) {
        while (isLetter) {
            
            if (/^[A-Z]$/i.test(s[last_idx]) === false) {
                break;
            }
            ++count;
            --last_idx;
        }
    }
    else {
        let word_found = false;
        let str = [...s];
        
        while (!word_found) {
            
            if (/^[A-Z]$/i.test(str[str.length - 1]) === false) {
                str.pop();
            }
            else {
                break;
            }
        }
        
        for (let i = str.length - 1; i >= 0; i--) {
            if (/^[A-Z]$/i.test(s[i]) === false) {
                break;
            }
            ++count;
        }
    }
    return count;
};