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
function pairSum(head: ListNode | null): number {

    // hash table solution.
    // Other methods includes using a half speed pointer to find the middle, reverse that
    // and then tranverse both linkedlist at the same time to achieve constant memory space

    const hashMap = new Map<number, number>();
    let counter = 0;

    while (head) {
        hashMap.set(counter, head.val)

        head = head.next
        counter++
    }

    let max = -Infinity;
    let counter2 = 0
    counter--

    while (counter > counter2) {
        const val = hashMap.get(counter) + hashMap.get(counter2)
        if (val > max) max = val
        counter--
        counter2++
    }

    return max
};
