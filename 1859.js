/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let split_s = s.split(" ");

    let dic = {};
    
    for (let i = 0; i < split_s.length; i++) {
        dic[split_s[i][split_s[i].length - 1]] = split_s[i].slice(0, split_s[i].length - 1);
    }
    
    return Object.values(dic).join(" ");

};