/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const split_sen = sentence.split(" ");
    
    let idx = split_sen.findIndex((a) => a.includes(searchWord) && a.indexOf(searchWord) === 0);
    
    return idx >= 0 ? idx + 1 : -1;
};