const { count } = require("console");

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
    let ans = 0;

    words.forEach((w) => {
        let set_chars = [...chars];
        let word = [...w];
        for (let i = 0; i < w.length; i++) {
            if (set_chars.includes(w[i])) {
                let idx_word = word.indexOf(w[i]);
                let idx_set = set_chars.indexOf(w[i]);

                word.splice(idx_word, 1);
                set_chars.splice(idx_set, 1);
                
                if (word.length === 0) {
                    ans += w.length;
                }
            }
        }
    })
    
    return ans;
    
};