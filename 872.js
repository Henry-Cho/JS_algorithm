/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    let seq1 = [];
    let seq2 = [];
    
    let cur1 = root1;
    let cur2 = root2;

    function gotoAll(r, arr) {
        if (!r.left && !r.right) {
            arr.push(r.val);
            return;
        }
        
        if (r.left) {
            gotoAll(r.left, arr);
        }
        if (r.right) {
            gotoAll(r.right, arr);
        }
    }
    
    gotoAll(cur1, seq1);
    gotoAll(cur2, seq2);
    
    console.log(seq1, seq2);
    
    return (seq1.length === seq2.length) && seq1.every((val, index) => val === seq2[index]);
};