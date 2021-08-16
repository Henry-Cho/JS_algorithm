/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let obj = {};
    
    let new_nums1 = [...new Set(nums1)];
    let new_nums2 = [...new Set(nums2)];
    
    new_nums1.forEach((n) => {
        obj[n] = 1;
    })
    
    new_nums2.forEach((n) => {
        if (obj[n]) {
            obj[n] += 1;
            return;
        }
        obj[n] = 1;
    })
    
    let ans = Object.keys(obj).filter((o) => obj[o] > 1);
    
    return ans;
};