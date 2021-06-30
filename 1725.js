/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    let maxLen = [];
    for (let i = 0; i < rectangles.length; i++) {
        
        maxLen.push(Math.min(...rectangles[i]));
    }
    
    let maxVal = Math.max(...maxLen);
    
    let answer = maxLen.filter((m) => m === maxVal).length;
    
    return answer;
};