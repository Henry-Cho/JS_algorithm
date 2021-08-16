/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    
    nums1.forEach((n) => {
        let idx = nums2.indexOf(n);
        
        if (idx + 1 === nums2.length) {
            ans.push(-1);
            return;
        }
        
        let rest = [...nums2.slice(idx + 1)];
        
        let rest_greater_val = rest.findIndex((r) => r > n) !== -1 ? rest[rest.findIndex((r) => r > n)] : -1;
        
        ans.push(rest_greater_val);
    })
    
    return ans;
};