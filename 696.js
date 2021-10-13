/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let ans = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        let sub = s[i]
        let f = 0;
        let t = 0;
        let changeNum = 0;
        let start = s[i] === "0" ? false : true;

        if (start) {
            ++t;
        }
        else {
            ++f;
        }
        for (let j = i+1; j < s.length; j++) {
            sub += s[j]
            if (s[j] === "0") { 
                ++f;
            }
            else {
                ++t;
            }

            if ((start && s[j] === "0" || !start && s[j] === "1") && s[j] !== s[j+1] && s[j+1] !== undefined) {
                ++changeNum;
                if (changeNum > 1) {
                    break;
                }
            }

            if ((start && s[j] === "1" || !start && s[j] === "0") && s[j] !== s[j-1] && s[j+1]!== undefined) {
                ++changeNum;
                if (changeNum > 1) {
                    break;
                }
            }
            
            if (f === t && f !== 0 && t !== 0) {
                console.log(sub)
                ++ans;
                break;
            }
        }
    }
    
    return ans;
};

console.log(countBinarySubstrings(""))