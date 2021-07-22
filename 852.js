//852. Peak Index in a Mountain Array
/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    return arr.indexOf(Math.max(...arr));
};