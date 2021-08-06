/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    let maxIdx = salary.findIndex((s) => s === Math.max(...salary));
     // remove max
    salary.splice(maxIdx, 1);
    let minIdx = salary.findIndex((s) => s === Math.min(...salary));
    // remove min
    salary.splice(minIdx, 1);
    
    return salary.reduce((a, b) => a + b, 0) / salary.length;
};