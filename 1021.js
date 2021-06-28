/**
 * @param {string} s
 * @return {string}
 */

/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let stack = [];
    let answer = "";
    s = [...s];
     
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        let num_open = stack.filter((s) => s === "(").length;
        let num_close = stack.filter((s) => s === ")").length;
        
        if (num_open === num_close) {
            answer += stack.slice(1, stack.length - 1).join("");
            stack = [];
        }
    }
    return answer;
};

//  var removeOuterParentheses = function(s) {
//     let stack = [];
//     let answer = "";
//     let outer = [];
//     let count = 0;
//     s = [...s];
//     let has_match = false;
//     let has_outer = false;
    
    
//     for (let i = 0; i < s.length; i++) {
//         console.log(`현재 ${i+1}번째 outer 의 상태: ${outer}`);
//         console.log(`현재 ${i+1}번째 stack 의 상태: ${stack}`);
//         if (!has_outer) {
//             has_outer = true;
//             outer.push(s[i]);
//             console.log(`현재 ${i+1}번째 answer 의 상태: ${answer}`);
//             console.log("-----------------------------------");
//             continue;
//         }
//         if (has_outer && stack[stack.length - 1] !== "(" && s[i] ===")" && has_match === false) {
//             outer.pop();
//             answer += "";
//             has_outer = false; 
//             continue;
//         }
//         if (has_outer && s[i] === "(") {
//             stack.push(s[i]);
//             has_match = false;
//             ++count;
//             console.log(`현재 ${i+1}번째 answer 의 상태: ${answer}`);
//             console.log("-----------------------------------");
//             continue;
//         }
//         if (has_outer === true && stack[stack.length - 1] === "(" && s[i] === ")") {
//             has_match = true;
//             console.log(count);
//             let part = "(".repeat(count) + ")".repeat(count);
//             console.log(`${has_outer} 아우터가 있고 매치가 되었어요!`);
//             console.log(part);
//             answer += part;
//             stack.pop();
//             count = 0;
//             console.log(`현재 ${i+1}번째 answer 의 상태: ${answer}`);
//             console.log("-----------------------------------");
//             continue;
//         }
//         if (has_match === true && s[i] === ")") {
//             outer.pop();
//             has_outer = false;
//         }
//         console.log(`현재 ${i+1}번째 answer 의 상태: ${answer}`);
//         console.log(`현재 ${i+1}번째 count 의 상태: ${count}`);
//         console.log("-----------------------------------");
//     }
//     return answer;
// };

// console.log(removeOuterParentheses("((()())(()()))"));