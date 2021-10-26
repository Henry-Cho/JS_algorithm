/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    let str = "";
    
    for (let i = 0; i < s.length; i++) {
        str += (s[i].charCodeAt(0) - 96).toString();
    }
    
    for (let i = 0; i < k; i++) {
        let sum = 0;
        for (let j = 0; j < str.length; j++) {
            sum += parseInt(str[j]);
        }
        str = sum.toString();
    }
    
    return parseInt(str);
};