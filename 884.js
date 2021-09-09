/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    let obj = {};
    
    let set_str1 = s1.split(" ");
    let set_str2 = s2.split(" ");
    
    for (let i = 0; i < set_str1.length; i++) {
        if (obj[set_str1[i]] == null) {
            obj[set_str1[i]] = false;
        }
        else {
            obj[set_str1[i]] = true;
        }
    }
    
    for (let i = 0; i < set_str2.length; i++) {
        if (obj[set_str2[i]] == null) {
            obj[set_str2[i]] = false;
        }
        else {
            obj[set_str2[i]] = true;
        }
    }
    
    let ans = Object.keys(obj).filter((a) => obj[a] === false);
    
    return ans;
};