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

function oddEvenList(head: ListNode | null): ListNode | null {
    let oddPointer = head;
    let evenPointer = head?.next;

    let evenHead = head?.next;

    let oddTail = head;

    while (oddPointer) {
        // move the tail forward
        oddTail = oddPointer;

        // direct the .next for both pointers
        if (oddPointer?.next) {
            oddPointer.next = oddPointer?.next?.next
        }
        if (evenPointer?.next) {
            evenPointer.next = evenPointer?.next?.next
        }

        // move both pointers
        oddPointer = oddPointer?.next
        evenPointer = evenPointer?.next
    }

    // connect both the broken linked-lists
    if (oddTail) {
        oddTail.next = evenHead
    }

    return head
};
