/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    let stack = [];
    let arr = [...s];
    while (arr.length !== 0) {
        if (arr[0] === stack[stack.length - 1]) {
            arr.shift();
            stack.pop();
            continue;
        }
        stack.push(arr.shift());
    }
    
    return stack.join("");
};