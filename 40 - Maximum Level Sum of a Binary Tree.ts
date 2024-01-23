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

function maxLevelSum(root: TreeNode | null): number {
    const sumArray : Array<number> = [] // index: node position, value: currentSum
    
    const queue = [{node: root, level: 0}]

    while (queue.length > 0) {
        const {node, level} = queue.pop();
        
        // updating sums
        sumArray[level] = (sumArray[level] ?? 0) + node.val

        // populate queue
        if (node.left) queue.push({node: node.left, level: level+1})
        if (node.right) queue.push({node: node.right, level: level+1})
    }

    // // obtaining max value from the hashTable
    // let largestIndex = 0;
    // let currentLargest = sumArray[0];
    // for (let i = 1; i < sumArray.length; i++) {
    //     if (sumArray[i] > currentLargest) {
    //         largestIndex = i;
    //         currentLargest = sumArray[i];
    //     }
    // }

    return sumArray.indexOf(Math.max(...sumArray)) + 1
};
