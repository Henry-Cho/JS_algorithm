/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    let mid = Math.floor(nums.length / 2);
    let new_node = new TreeNode(nums[mid]);
    
    new_node.left = sortedArrayToBST(nums.slice(0, mid));
    new_node.right = sortedArrayToBST(nums.slice(mid+1));
    
    return new_node;
};