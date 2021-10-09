/**
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    let obj = {};
    
    arr.forEach((a)=> {
        if (obj[a] === undefined) {
            obj[a] = 1;
            return;
        }
        obj[a] += 1;
    })
    
    let lucky = [];
    
    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (Object.keys(obj)[i] === Object.values(obj)[i].toString()) {
            lucky.push(Object.keys(obj)[i]);
        }    
    }
    
    return lucky.length === 0 ? -1 : Math.max(...lucky);
};