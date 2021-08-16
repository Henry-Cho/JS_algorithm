/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    let first = {};
    let first_w = "qwertyuiop";
    let second = {};
    let second_w = "asdfghjkl";
    let third = {};
    let third_w = "zxcvbnm";
    
    let ans = [];
    
    for (let i = 0; i < first_w.length; i++) {
        first[first_w[i]] = true;
    }
    
    for (let i = 0; i < second_w.length; i++) {
        second[second_w[i]] = true;
    }
    
    for (let i = 0; i < third_w.length; i++) {
        third[third_w[i]] = true;
    }

    let standard = "";
    
    for (let i = 0; i < words.length; i++) {
        let is_wrong = false;
        if (first[words[i][0].toLowerCase()]) {
            standard = "f";
        }
        if (second[words[i][0].toLowerCase()]) {
            standard = "s";
        }
        if (third[words[i][0].toLowerCase()]) {
            standard = "t";
        }
        
        if (standard === "f") {
            for (let j = 1; j < words[i].length; j++) {
                if (!first[words[i][j].toLowerCase()]) {
                    is_wrong = true;
                    break;
                }
            }
        }
        
        else if (standard === "s") {
            for (let j = 1; j < words[i].length; j++) {
                if (!second[words[i][j].toLowerCase()]) {
                    is_wrong = true;
                    break;
                }
            }
        }
        
        else {
            for (let j = 1; j < words[i].length; j++) {
                if (!third[words[i][j].toLowerCase()]) {
                    is_wrong = true;
                    break;
                }
            }
        }
        if (!is_wrong) ans.push(words[i]);
    }
    
    return ans;
};