/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let arr = [];
    for (let i = 0; i < n - 1; i++) {
        arr.push((start + (i * 2)) + '');
        arr.push("^");
    }
    arr.push((((n - 1) * 2) + start) + "");
    let answer = eval(arr.join(''));
    return answer;
};

console.log(xorOperation(10, 5));