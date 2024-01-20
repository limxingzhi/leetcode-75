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

 // the idea here is to store the prefixes in the candidate queue
 // and then as you crawl the child nodes, iterate the prefixes to see if they
 // contain the target sum.
 
 // this is a time n^2 solution, once for tree tranversal, once for each prefix array

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0

    const queue : Array<{node: TreeNode, prefixes: Array<number>}> 
        = [{node: root, prefixes: []}]

    let outputCount = 0;

    while (queue.length > 0) {
        const { node, prefixes } = queue.shift();

        // note: prefix starts from the current node back up to the root
        let currentPrefix = [node.val, ...prefixes]

        if (node.left) queue.push({ node: node.left , prefixes: currentPrefix })
        if (node.right) queue.push({ node: node.right , prefixes: currentPrefix })

        // iterate currentPrefix to find if there's a sum
        // there might be more than one targetSum (e.g. [3,5,1,9,10] has 3x 8s)
        let targetCounter = 0;
        currentPrefix.reduce((prev, current) => {
            const sum = prev + current
            if (sum === targetSum) targetCounter++
            return sum
        }, 0)

        outputCount += targetCounter
    }

    return outputCount
};
