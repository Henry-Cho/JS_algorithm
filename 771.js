/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let num_jewel = 0;
    stones = [...stones];
    stones.forEach(element => {
        if (jewels.includes(element)) {
            ++num_jewel;
        }
    });
    return num_jewel;
 };

console.log(numJewelsInStones("z", "ZZZ"));