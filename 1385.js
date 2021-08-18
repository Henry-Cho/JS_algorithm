/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
 var findTheDistanceValue = function(arr1, arr2, d) {
    let ans = [...arr1];
    
    arr2.forEach((a) => {
        for (let i = 0; i < arr1.length; i++) {
            if (Math.abs(arr1[i] - a) <= d) {
               if (ans.indexOf(arr1[i]) !== -1) {
                   ans.splice(ans.indexOf(arr1[i]), 1);
               }
            }
        }
    });
    
    return ans.length;
};

console.log(findTheDistanceValue([4,5,8],[10,9,1,8],2));