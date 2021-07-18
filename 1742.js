/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    dic = {};
    
    for (let i = lowLimit; i <= highLimit; i++) {
        let str_num = i.toString().split("");
        let index = str_num.map((s) => parseInt(s)).reduce((a, b) => a + b, 0).toString();

        if (Object.keys(dic).includes(index)) {
            dic[index] += 1;
            continue;
        }

        dic[index] = 1;
    }
    
    return Math.max(...Object.values(dic));
};