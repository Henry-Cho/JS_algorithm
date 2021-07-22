//1935. Maximum Number of Words You Can Type

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
 var canBeTypedWords = function(text, brokenLetters) {
    let split_txt = text.split(" ");
    let count = 0;
    
    for (let i = 0; i < split_txt.length; i++) {
        ++count;
        for (let j = 0; j < brokenLetters.length; j++) {
            if (split_txt[i].includes(brokenLetters[j])) {
                --count;
                break;    
            }
        }
    }
    
    return count;
};