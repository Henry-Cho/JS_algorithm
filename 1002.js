//1002. Find Common Characters
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let ans = [];
    
    let standard = [...words[0]];
    
    for (let i = 1; i < words.length; i++) {
        let word = [...words[i]];
        let standard_length = standard.length;
        for (let j = 0; j < word.length; j++) {
            if (standard.includes(word[j])) {
                let idx = standard.findIndex((s) => s === word[j]);
                
                if (idx !== -1) {
                     ans.push(standard[idx]);
                     standard.splice(idx, 1);
                }
            }
        }
        
        if (standard.length === standard_length) {
            return [];
        }
        
        if (i === words.length - 1) {
            if (ans.length > 0) {
                return ans;
            }
        }
        standard = [...ans];
        ans = [];
    }
    
    return ans;
    
};