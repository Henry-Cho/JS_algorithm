/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let max_num = Math.max(...candies);
    let answer = candies.map((c) => {
        if (c + extraCandies >= max_num) {
            return true;
        } 
        return false;
    })
    return answer;
};