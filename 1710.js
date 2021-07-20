// 1710. Maximum Units on a Truck

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1]-a[1]);
    let total_unit = 0;
    let ans = 0;
    let rest = 0;
    
    for (let i = 0; i < boxTypes.length; i++) {
        if (total_unit + boxTypes[i][0] > truckSize) {
            rest = truckSize - total_unit;
            ans += rest * boxTypes[i][1];
            break;
        }
        total_unit += boxTypes[i][0];
        ans += boxTypes[i][0] * boxTypes[i][1];
    }
    return ans;
};