/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    let obj = {};
    
    nums.forEach((n) => {
        if (!obj[n]) {
            obj[n] = 1;
            return;
        }
        obj[n]+=1;
    })
    
    let ans = [];
    
    let keys = Object.keys(obj).sort((a, b) => {
        if (obj[a] === obj[b]) {
            return b - a;
        }
        return obj[a] - obj[b];
    })
    
    for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < obj[keys[i]]; j++) {
            ans.push(keys[i]);
        }
    }
    
    return ans;
};