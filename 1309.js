/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    let alphabet = [];
    let answer = [];
    let stack = [];
    
    for (let i = 1; i < 27; i++) {
        if (i < 10) {
            alphabet.push(`${i}`);    
            continue;
        }
        alphabet.push(`${i}#`); 
    }

    console.log(alphabet);
    
    // 문자열의 길이가 2 이하인 경우
    if (s.length <= 2) {
        if (s.length === 1) {
            answer.push(String.fromCharCode(alphabet.indexOf(s) + 97));
        }
        else {
            s = [...s];
            s.forEach((i) => answer.push(String.fromCharCode(alphabet.indexOf(s[i]) + 97)));
        }
        console.log(answer);
        return answer.join("");
    }
    // 문자열의 길이가 3 이상인 경우
    let isFind = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === "#") {
            isFind = true;
        }
        if (isFind) {
            if (s[i] === "#") {
                let part = stack.join("");
                answer.push(String.fromCharCode(alphabet.indexOf(part + "#") + 97));
                isFind = false;
                stack = [];
                continue;
            }
            stack.push(s[i]);
        }
        if (!isFind) {
            answer.push(String.fromCharCode(alphabet.indexOf(s[i]) + 97));
            continue;
        }      
    }
    console.log(answer);
    return answer.join("");
    
};

freqAlphabets("10#11#12");