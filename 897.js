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

 var increasingBST = function(root) {
    let nodes = [];
    dfs(root);
    
    let treeNode = new TreeNode(nodes[0]);
    
    let cur = treeNode;
    
    for (let i = 1; i < nodes.length; i++) {
        cur.right = new TreeNode(nodes[i]);
        cur = cur.right;
    }
    
    return treeNode;
    
    function dfs(r) {
        if (r != null) {
            dfs(r.left);
            nodes.push(r.val);
            dfs(r.right);
        }
    }
    
};