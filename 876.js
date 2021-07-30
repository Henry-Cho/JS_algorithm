//876. Middle of the Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    let count = 0;
    
    function getCount(h) {
        let cur = h;
        
        while (cur != null) {
            ++count;
            cur = cur.next;
        }
    }
    
    getCount(head);
  
    let middle = parseInt(count / 2);
    
    let ans = head;
    
    for (let i = 0; i < middle; i++) {
        ans = ans.next;
    }
    
    return ans;
};