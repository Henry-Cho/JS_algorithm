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
 var deleteDuplicates = function(head) {
    let cur = head;
    let pre = null;
    
    while (cur !== null) {
        if (pre && pre.val === cur.val) {
            pre.next = cur.next;
            cur = cur.next;
            continue;
        }
        pre = cur;
        cur = cur.next;
    }
    
    return head;
};