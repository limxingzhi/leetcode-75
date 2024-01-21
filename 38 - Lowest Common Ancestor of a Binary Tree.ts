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

// // Note : read the constraints
// // - no need to early return null roots
// // - p and q will always exist

// // the first immediate idea is to store the path against the node.val
// // and then iterate the paths whenever we found both nodes
// // which would be about O(n^2) for time complexity

// interface Candidate {
//     node: TreeNode;
//     path: Array<TreeNode>;
// }

// function slow_lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

//     const stack: Array<Candidate> = [{node: root, path: []}];

//     let pPath : Array<TreeNode>
//     let qPath : Array<TreeNode>

//     while (stack.length > 0) {
//         // destructure the node and path from candidate node
//         const {node, path} = stack.pop()
//         const newPath = [...path, node];

//         if (node === p) {
//             pPath = newPath;
//         } else if (node === q) {
//             qPath = newPath;
//         }

//         if (pPath && qPath) {
//             // destroy stack to short circuit tranversal
//             stack.splice(0, stack.length)
//         } else {
//             if (node.left) stack.push({node: node.left, path: newPath})
//             if (node.right) stack.push({node: node.right, path: newPath})
//         }
//     }
    
//     // due to the constraint, p and q will ALWAYS exist
//     let latestAncestor : TreeNode;
//     while (pPath.length > 0) {
//         const pCurrent = pPath.shift()
//         const qCurrent = qPath.shift()

//         if (pCurrent === qCurrent) latestAncestor = pCurrent
//         else return latestAncestor
//     }
	
//     return latestAncestor as TreeNode
// };


// note: Time complexity = O(n) because the tree is traversed only once
// why do we return the root immediately when we find either one of them?
// - when we find p, the q node might be in the sub tree,
//   in which case if the other side return null, p WILL be the LCA
//   so no need to continue travsersing
// - but if q is found on the other side of the tree, that means q is NOT in the subtree.
// - eitherway, the edge case is handled, so we don't need to traverse the entire tree to find q

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root) return null
    if (root === p || root === q) return root

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)

    // current node is the LCA
    if (left && right) return root

    if (left) return left
    else if (right) return right
    else return null
};
