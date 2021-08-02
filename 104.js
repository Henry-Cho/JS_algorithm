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
 var maxDepth = function(root) {
    let max = 0;
    let count = 0;
    
    function depthCheck(r, count) {
        if (!r) {
            if (max < count) {
                max = count;
            }
            return;
        }
        
        depthCheck(r.left, count + 1);
        depthCheck(r.right, count + 1);
    }
    
    depthCheck(root, count);
    
    return max;
};