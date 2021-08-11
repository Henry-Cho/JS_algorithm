/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let split_s = sentence.split(" ");
    
    let arr = split_s.map((s, idx) => {
        if (vowels.includes(s[0].toLowerCase())) {
            return (s + "ma") + "a".repeat(idx + 1);
        }
        
        let word = [...s];
        word.push(word.shift());
        return word.join("") + "ma" + "a".repeat(idx + 1);
    })
    
    return arr.join(" ");
};