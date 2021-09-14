/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
    arr.sort((a,b) => a - b);
    arr = arr.slice(parseInt(0.05 * arr.length), parseInt(0.95 * arr.length));
    
    let sum = arr.reduce((a, b) => a + b);
    
    let avg = Math.round((sum / arr.length) +'e5')+'e-5';
    
    return avg;
};