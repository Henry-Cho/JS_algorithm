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
 var reverseList = function(head) {
    let arr = [];
    
    let cur = head;
    
    if (!cur) {
        return cur;
    }
    
    while (cur) {
        arr.unshift(cur.val);
        cur = cur.next;
    }
    
    let new_link = new ListNode(arr.shift());

    let new_cur = new_link;
    
    while (arr.length !== 0) {
        new_cur.next = new ListNode(arr.shift());    
        
        new_cur = new_cur.next;
    }
    
    return new_link;
};