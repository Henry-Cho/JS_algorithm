/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    let even = 0;
    let odd = 0;
     
     position.forEach((p) => p % 2 === 0 ? ++even : ++odd);
     
     return Math.min(even, odd);
};