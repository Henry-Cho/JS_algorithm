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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    let new_tree = root ? new TreeNode(root.val) : null;
    
    if (!root) {
        return new_tree;
    }
    
    function invertion(r, newT) {
        if (!r) {
            return;
        }
        
        if (r.right) {
            newT.left = new TreeNode(r.right.val);
        }
        
        if (r.left) {
            newT.right = new TreeNode(r.left.val);
        }
        
        invertion(r.right, newT.left);
        invertion(r.left, newT.right);
    }
    
    invertion(root, new_tree);
    
    return new_tree;
};