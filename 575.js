/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    let max_num = candyType.length / 2;
    
//     let obj = {};
    
//     for (let i = 0; i < candyType.length; i++) {
//         if (obj[candyType[i]]) {
//             obj[candyType[i]] += 1;
//             continue;
//         }
//         obj[candyType[i]] = 1;
//     }
    
    let set_type_len = [...new Set(candyType)].length;
    
    return set_type_len > max_num ? max_num : set_type_len;
};