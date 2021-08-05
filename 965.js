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
 * @return {boolean}
 */
 var isUnivalTree = function(root) {
    let standard = root.val;
    let isEqual = true;
    
    function checkEqual(r) {
        if (!r) {
            return;
        }
        
        if (r.val !== standard) {
            isEqual = false;
            return;
        }
        
        if (isEqual) {
            checkEqual(r.left);
            checkEqual(r.right);
        }
    }
    
    checkEqual(root);
    
    return isEqual;
};