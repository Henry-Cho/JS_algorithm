// 1684번 문제
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 1 && allowed.includes(words[i])) {
            ++count;
            continue;
        }

        let set_words = new Set(words[i]);
        set_words = [...set_words];
        let judge = set_words.filter((s) => allowed.includes(s));
        if (judge.length !== set_words.length) {
            continue;
        }
        ++count;
    }
    return count;
};