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

type Candidate = {
    depth: number,
    node: TreeNode | null
}

function maxDepth(root: TreeNode | null): number {
    // early return
    if (!root) return 0

    // do BFS

    const queue : Array<Candidate> = [{node: root, depth: 1}];
    let max = 0;

    while (queue.length > 0) {
        // destructure the candidate from the front of the queue
        const {node, depth} = queue.shift()

        // set the new max depth
        if (depth > max) max = depth

        // add child nodes into the queue
        if (node?.left) queue.push({node: node.left, depth: depth +1}) 
        if (node?.right) queue.push({node: node.right, depth: depth +1}) 
    }
    
    return max
};
