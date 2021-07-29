/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    let count = 1;
    let index = 0;
    let ans = [];
    let stack = [];
    
    while (count <= n) {
        stack.push(count);
        ans.push("Push");

        if (stack[stack.length - 1] === target[target.length - 1]) {
            break;
        }

        if (target[index] && (stack[index] !== target[index])) {
            --index;
            ans.push("Pop");
            stack.pop();
        }

        ++index;
        ++count;
    }

    return ans;
}