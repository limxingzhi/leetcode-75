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

interface Candidate {
    node: TreeNode;
    level: number;
}

// iterative version
function rightSideView(root: TreeNode | null): number[] {
    const output : Array<number> = [];
    if (!root) return [];
    const queue: Array<Candidate> = [{node: root, level: 0}];

    while (queue.length) {
        const { node, level } = queue.shift();

        // Note: since we are doing BFS, the queue will always have
        // entire level one before the next level comes around
        if (level >= output.length) output.push(node.val)

        // always insert right node into the queue first,
        // so the right-side node always get stored into the outputTable first
        if (node.right) queue.push({ node: node.right, level: level+1 })
        if (node.left) queue.push({ node: node.left, level: level+1 })
    }

    return output
};

