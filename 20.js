/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        console.log(`${i} 번째: `, stack);
        // when empty stack, there comes a closed parenthesis
        if (stack.length === 0 && !obj[s[i]]) {
            console.log("첫 번쨰 조건에 들어왔다", obj[s[i]]);
            return false;
        }
        
        // when there is something in the stack, last element of the stack is not matched with the coming element 
        if (stack.length > 0 && !obj[s[i]] && obj[stack[stack.length - 1]] !== s[i]) {
            console.log("두 번쨰 조건에 들어왔다", obj[stack[stack.length - 1]], s[i]);
            return false;
        }
        
        // push open parenthesis in the stack
        if (obj[s[i]]) {
            console.log("세 번째 조건에 들어왔다")
            stack.push(s[i]);
            continue;
        }
        
        // pop when find the matched parenthesis
        if (s[i] === obj[stack[stack.length - 1]]) {
            console.log("네 번째 조건에 들어왔다")
            stack.pop();
        }
    }
    
    if (stack.length !== 0) {
        return false;
    }
    return true;
};

console.log(isValid("(])"));