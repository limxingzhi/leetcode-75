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

function deleteMiddle(head: ListNode | null): ListNode | null {
    let move = false;

    let middle: ListNode = head;

    let nextNode = head.next;
    while (nextNode?.next) {
        // advance the middle node pointer once every 2 loops
        if (move) {
            middle = middle?.next;
        }
        move = !move

        // advance the nextNode pointer
        nextNode = nextNode?.next
    }

    // point the middle.next to skip the next one
    if (middle.next) {
        middle.next = middle?.next?.next
    } else {
        // handle the edge case of middle.next being null,
        // which really is just a length : 1 nodelist
        return null
    }

    return head
};
