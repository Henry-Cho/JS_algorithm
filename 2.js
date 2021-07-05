// 2번 문제
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let cur1 = l1;
    let cur2 = l2;
    
    let newList = new ListNode(0, null);
    
    let cur = newList;
    let carry = 0;
    
    while (cur1 || cur2 || carry !== 0) {
        let sum = (cur1? cur1.val : 0) + (cur2? cur2.val : 0) + carry;
        
        carry = sum > 9 ? 1 : 0;
        
        cur.val = sum % 10;
        
        cur1 = cur1 ? cur1.next : null;
        cur2 = cur2 ? cur2.next : null;
        
        if (cur1 || cur2 || carry !== 0) {
            cur.next = new ListNode(0, null);
            cur = cur.next;
        }
    }
    
    return newList;
};