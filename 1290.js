/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let cur = head;
    let count = 0;
    while (cur != null) {
        ++count;
        cur = cur.next;
    }
    let answer = 0;
    cur = head;
    while (cur != null) {
        --count;
        if (cur.val !== 0) {
            answer += Math.pow(2, count);    
        }
        cur = cur.next;
    }
    
    return answer;
};