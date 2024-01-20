/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


// The idea is to have the path count stored in the data structure of the queue

interface Candidate {
    node: TreeNode;
    maxCount: number;
}

function goodNodes(root: TreeNode | null): number {
    // early return
    if (!root) return

    let counter = 0

    const queue: Array<Candidate> = [{ node: root, maxCount: root.val }]

    // classic BFS to tranverse the entire tree
    while (queue.length > 0) {
        // pop and destructure candidate
        const { node, maxCount } = queue.shift()
        // increment counter if this is the largest value the path
        if (node.val >= maxCount) counter++

        // reassign value of maxCount if necessary
        let newMax = node.val > maxCount ? node.val : maxCount
        if (node.left) queue.push({node: node.left, maxCount: newMax})
        if (node.right) queue.push({node: node.right, maxCount: newMax})
    }

    return counter
};
