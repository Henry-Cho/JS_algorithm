/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    stones.sort((a,b)=> b - a);
    
    while (stones.length !== 1) {
        if (stones[0] > stones[1]) {
            stones.push(stones[0] - stones[1]);
        }
        if (stones[0] >= stones[1]) {
            stones = stones.slice(2);
            if (stones.length === 0) {
                break;
            }
        }
        stones.sort((a,b)=> b - a);
    }
    
    return stones;
};