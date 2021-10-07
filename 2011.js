/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let ans = 0;
    
    operations.forEach((a) => { 
        if (a[0] === "+" || a[a.length - 1] === "+") {
            ++ans;
        }
        else {
            --ans;
        }
    })
    
    return ans;
};