// 1460. Make Two Arrays Equal by Reversing Sub-arrays
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 const isEqualArr = (arr1, arr2) => {
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((a, idx) => a === arr2[idx])) {
        return true;
    }
    return false;
}

var canBeEqual = function(target, arr) {
    target.sort((a,b) => a - b);
    arr.sort((a,b) => a - b);
    
    return isEqualArr(target, arr);
};