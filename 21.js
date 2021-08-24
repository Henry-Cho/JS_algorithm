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
 var mergeTwoLists = function(l1, l2) {
    // tracking nodes
    let cur1 = l1;
    let cur2 = l2;
    
    // when the two lists do not have any nodes
    if (cur1 === null && cur2 === null) {
        return null;
    }
    // create a listnode object and its tracking node
    let newList = new ListNode();
    let cur3 = newList;
    
    // This will judge whether either l1 or l2 is null
    let onlyOne = false;
    
    while (cur1 || cur2) {
        
        // escape loop with confirming that the onlyone is true 
        if (!cur1 || !cur2) {
            onlyOne = true;
            break;
        }
        
        // sorting process
        if (cur1.val > cur2.val) {
            // if cur1's val is bigger than cur2's, then cur3 takes cur2's val
            cur3.val = cur2.val;
            // cur2 moves to the next node
            cur2 = cur2.next;
            
            // if the current cur2 points at null, escape.
            if (!cur2) {
                break;
            }
        } 
        else {
            // if cur1's val is equal to or less than cur1's, then cur3 takes cur1's val
            cur3.val = cur1.val;
            // cur1 moves to the next node
            cur1 = cur1.next;
            // if the current cur1 points at null, escape.
            if (!cur1) {
                break;
            }
        }
        
        // put a new ListNode to newList through cur3
        cur3.next = new ListNode();
        // cur3 now points to cur3's next
        cur3 = cur3.next;
    }
    
    // whichever of cur1 or cur2 does not point at null
    let rest = cur1 ? cur1 : cur2;
    
    // if onlyOne is true, return rest
    if (onlyOne) {
        return rest;
    }
    
    // rest is not null, put a new ListNode to newList through cur3 and cur3 points to its next;
    if (rest) {
        cur3.next = new ListNode();
        cur3 = cur3.next;
    }
    
    // newList takes all nodes of rest through the while loop 
    while (rest) {
         cur3.val = rest.val;
        if (rest.next) {
            rest = rest.next;
            cur3.next = new ListNode();
            cur3 = cur3.next;            
        }
        else {
            rest = rest.next;
        }
    }
    
    return newList;
};