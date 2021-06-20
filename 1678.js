// 1678번 문제
/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let answer = [];
    for (let i = 0; i < command.length; i++) {
        if (command[i] === "(" && command[i+1] === "a") {
            answer.push("al");
        }
        else if (command[i] + command[i+1] === "()") {
            answer.push("o");
        }
        else if (command[i] === "G") {
            answer.push(command[i]);
        }
    }
    return answer.join('');
};