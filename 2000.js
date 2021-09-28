/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    let reverse_point = word.indexOf(ch);
    
    let reverse_str = [...word.slice(0, reverse_point + 1)].reverse().join("");
    let rest_str = word.slice(reverse_point + 1);
    
    return reverse_str + rest_str;
}