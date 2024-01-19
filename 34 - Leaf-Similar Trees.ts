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

function getLeafSequence (root: TreeNode): Array<number> {
    // early return
    if (!root) return [];

    const leafSequence = [];

    // you want to go depth first

    const stack: Array<TreeNode> = [root];
    
    while (stack.length > 0) {
        const current = stack.pop()

        // add children nodes into the stack
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)

        // is leaf node
        if (!current.left && !current.right) {
            leafSequence.push(current.val)
        }
    }

    return leafSequence
}

// this solution will do a full tranversal of both trees, but there is a way to short circuit it
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    // get the sequence of both trees and compare the nodes
    
    const sequence1 = getLeafSequence(root1)
    const sequence2 = getLeafSequence(root2)
    // console.log(JSON.stringify(sequence1), JSON.stringify(sequence2))
    // return JSON.stringify(sequence1) === JSON.stringify(sequence2)

    // fine, I will actually write out a comparison
    if (sequence1.length !== sequence2.length) return false;
    for (let i = 0; i < sequence1.length; i++) {
        if (sequence1[i] !== sequence2[i]) return false
    }
    return true
};

// // this solution short circuit when a leaf node doesn't match, but does a full tranversal of both anyways
// function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
//     // early return
//     if (!root1 && !root2) return true;
//     if (!root1 || !root2) return false;

//     const leafSequence1 = [];
//     const leafSequence2 = [];

//     // you want to go depth first

//     const stack1: Array<TreeNode> = [root1];
//     const stack2: Array<TreeNode> = [root2];
    
//     while (stack1.length > 0 || stack2.length > 0) {
//         const current1 = stack1.pop()
//         const current2 = stack2.pop()

//         // compare flag, only true when either node is a leaf
//         let compare = false;

//         // operations for queue 1
//         if (current1) {
//             // add children nodes into the stack
//             if (current1.right) stack1.push(current1.right)
//             if (current1.left) stack1.push(current1.left)

//             // is leaf node
//             if (!current1.left && !current1.right) {
//                 leafSequence1.push(current1.val)
//                 compare = true;
//             }
//         }

//         // operations for queue 2
//         if (current2) {
//             // add children nodes into the stack
//             if (current2.right) stack2.push(current2.right)
//             if (current2.left) stack2.push(current2.left)

//             // is leaf node
//             if (!current2.left && !current2.right) {
//                 leafSequence2.push(current2.val)
//                 compare = true;
//             }
//         }

//         // pop both items when they are not empty and compare the first node
//         // short circuit if they dont match
//         if (compare && leafSequence1.length > 0 && leafSequence2.length > 0) {
//             // they both have something in their queue
//             console.log(leafSequence1, leafSequence2)
//             const same = leafSequence1.shift() === leafSequence2.shift()
//             if (!same) return false
//         }

//     }


//     // // at this point, stack1 is empty, so if stack2 is empty too
//     // // that means the whole thing passed. But if stack2 is not empty,
//     // // that means there are still leaf nodes not captured
//     // return stack2.length <= 0

//     return leafSequence1.length <=0 && leafSequence2.length <= 0
// };
