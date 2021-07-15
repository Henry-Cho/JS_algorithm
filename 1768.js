// 1768번 문제
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let first = "";
    let second = "";
    let rest = "";
    let s_len = 0;
    
    if (word1.length > word2.length) {
        first = [...word1.slice(0, word2.length)];
        second = [...word2];
        rest = word1.slice(word2.length);
        s_len = second.length;
    }
    else if (word1.length < word2.length) {
        first = [...word1];
        second = [...word2.slice(0, word1.length)];
        rest = word2.slice(word1.length);
        s_len = first.length;
    }
    else {
        first = [...word1];
        second = [...word2];
        s_len = first.length;
    }
    let ans = "";
    for (let i = 0; i < s_len; i++) {
        ans += first[i];
        ans += second[i];
    }
    
    if (rest === "") {
        return ans;
    }
    return ans + rest;
};