// 1207. Unique Number of Occurrences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    
    let obj = {};
    arr.forEach((a) => {
        if (!obj[a]) {
            obj[a] = 1;
            return;
        }
        obj[a] += 1;
    })
    
    let total_occ = [...new Set([...Object.values(obj)])].length;
    
    return total_occ === Object.values(obj).length ? true : false;
};