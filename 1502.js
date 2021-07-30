/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => a - b);
    
    let difference = arr[1] - arr[0];
    
    for (let i = 1; i < arr.length - 1; i++) {
        let judge = arr[i+1] - arr[i];
        
        if (difference !== judge) {
            return false;
        }
    }
    
    return true;
};