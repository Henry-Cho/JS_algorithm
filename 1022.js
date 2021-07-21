// 1022. Sum of Root To Leaf Binary Numbers
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumRootToLeaf = function(root) {
    let ans = 0;
    
    function RtoL(r, arr) {
        if (!r) {
            return;
        }
        
        arr.push(r.val)
        
        if (!r.left && !r.right) {
            ans += parseInt(arr.toString().split(",").join(""), 2);
            return;
        }
        
        RtoL(r.left, [...arr]);
        RtoL(r.right, [...arr]);
    }
    
    RtoL(root, []);
    
    return ans;
    
};