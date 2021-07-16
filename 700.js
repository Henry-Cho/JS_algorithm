// 700번 문제
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
 * @param {number} val
 * @return {TreeNode}
 */

 var searchBST = function(root, val) {
    let cur_root = root;
    let is_found = false;
    
    function findBST(r, v) {
        if (!r) {
            return;
        }
        if (r.val === v) {
            cur_root = r;
            is_found = true;
            return;
        }
        findBST(r.left, v);
        findBST(r.right, v);
    }
    
    findBST(root, val);
    
    return is_found ? cur_root : null;
};