/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    
    // the idea is to have 3 pointers
    // save the head to prev, move the head, save the new head's next to next
    // before modifying with head.next to point to prev
    // update prev and head and repeat 

    let prev : ListNode | null = null
    let next : ListNode | null = null

    while (head) {
        next = head.next
        head.next = prev

        prev = head
        head = next
    }

    return prev
};
