/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let ans = [];
    for (let i = left; i <= right; i++) {
        let str = i.toString();
        str = [...str];
        let flag = 0;
        for (let j = 0; j < str.length; j++) {
            let num = parseInt(str[j]);
            if (i % num !== 0) {
                ++flag;
            }
        }
        if (flag === 0) {
            ans.push(i);
        }
    }
    return ans;
};

console.log(selfDividingNumbers(1, 22));