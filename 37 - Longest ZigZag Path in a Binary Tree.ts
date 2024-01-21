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

// the idea is BFS, but store the LRLR path in the queue

// Note : the path does NOT have to start from the root

// Time complexity is O(n)

interface Candidate {
    node: TreeNode;
    path: string;
}

function longestZigZag(root: TreeNode | null): number {
    // early return
    if (!root) return 0

    let max = 0;

    const queue : Array<Candidate> = []

    if (root.left) queue.push({node: root.left, path: 'L'})
    if (root.right) queue.push({node: root.right, path: 'R'})

    while (queue.length > 0) {
        // dequeue and destructure current node
        const {node, path} = queue.shift()

        // increment max
        if (max < path.length) max = path.length

        if (path.slice(-1) === "L") {
            // continue zigzag
            if (node.right) queue.push({node: node.right, path: path+'R'})
            // reset path
            if (node.left) queue.push({node: node.left, path: 'L'})
        } else if (path.slice(-1) === "R") {
            // continue zigzag
            if (node.left) queue.push({node: node.left, path: path+'L'})
            // reset path
            if (node.right) queue.push({node: node.right, path: 'R'})
        } else {
            // reset path for both
            if (node.left) queue.push({node: node.left, path: 'L'})
            if (node.right) queue.push({node: node.right, path: 'R'})
        }
    }

    return max
};
