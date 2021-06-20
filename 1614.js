/**
 * @param {string} s
 * @return {number}
 */

 let isVPS = (s) => {
    if (s === "" || (s !== "(" || s!== ")")) {
        return true;
    }
    return false;
}

const operators = ['+', '-', '*', '/'];

var maxDepth = function(s) {
    let stack = [];
    let depth = 0;
    for (let i = 0; i < s.length; i++) {
        if (operators.includes(s[i])) {
            continue;
        }
        if (s[i] == "(") {
            ++depth;
        }
        if (isVPS(s[i])) {
            stack.push(depth);
        }
        
        if (s[i] == ")") {
            --depth;
        }
    }
    return Math.max(...stack);
     
};