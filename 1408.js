/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    let ans = [];
    
    words.sort((a, b) => {
        if (a.length === b.length) {
            return a[0].charCodeAt(0) - b[0].charCodeAt(0);
        }
        return a.length - b.length;
    });
    
    console.log(words);

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i+1; j < words.length; j++) {
            if (words[j].includes(words[i])) {
                ans.push(words[i]);
                break;
            }
        }
    }
    
    return ans;
    
};

console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]));