/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    let max_len = 1;
    let obj = {};
    
    for (let i = 1; i <= n; i++) {

        if (n > 9) {
            let num = i.toString().split("").map((a) => parseInt(a));
            let key = num.reduce((a,b) => a + b, 0);
            if (obj[key]) {
                obj[key].push(i);
                if (max_len < obj[key].length) {
                    max_len = obj[key].length;
                }
                continue;
            }
            obj[key] = [n];
            continue;
        }
        
        obj[i] = [i];
    }
    
    let ans = Object.values(obj).filter((a) => a.length === max_len);
    
    return ans.length;
};