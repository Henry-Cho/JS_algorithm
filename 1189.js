/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    let obj = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0
    };
    
    for (let i = 0; i < text.length; i++) {
        if (obj[text[i]] !== undefined) {
            if (text[i] === "l" || text[i] === "o") {
                obj[text[i]] += 0.5;
                continue;
            }
            obj[text[i]] += 1;
        }
    }
    
    obj['l'] = parseInt(obj['l'])
    obj['o'] = parseInt(obj['o'])
    
    return Math.min(...Object.values(obj));
};