/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return [...s].reverse().join("").split(" ").reverse().join(" ");
};