/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
 var distributeCandies = function(candies, num_people) {
    let obj = {};
    
    for (let i = 0; i < num_people; i++) {
        obj[i] = 0;
    }
    
    let candy = 0;
    
    while (candies !== 0) {
        for (let i = 0; i < num_people; i++) {
            if (candies <= candy) {
                obj[i] += candies;
                candies = 0;
                break;
            }
            obj[i] += candy + 1;
            ++candy;
            candies -= candy;
        }
    }

    return Object.values(obj);
};