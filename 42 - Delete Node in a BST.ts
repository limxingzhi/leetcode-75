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

// ref : https://www.enjoyalgorithms.com/blog/deletion-in-binary-search-tree
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    // quick return when value is not found
    if (root.val !== key) {
        root.left = deleteNode(root.left, key)
        root.right = deleteNode(root.right, key)

        return root
    }

    // case 1 : is leaf node, delete node
    if (root.left === null && root.right === null) return null

    // case 2 : root only has 1 child
    if (root.left === null || root.right === null && (root.left !== root.right)) {
        return root.left ?? root.right
    }

    // case 3 : root has two children
    const newVal = findMostLeftChildValue(root.right);

    // set the current node to the lowest value on the right side
    root.val = newVal

    // delete the previous node with the lowest value
    root.right = deleteNode(root.right, newVal)

    return root
};

function findMostLeftChildValue (node: TreeNode | null): number {
    if (node.left === null) return node.val
    else return findMostLeftChildValue(node.left)
}
