// // too slow: storing k values in a set
// function findKthLargest(nums: number[], k: number): number {
//     // note: nums.length >= k
//     const largestValues : Array<number> = [];

//     // storing k values in the set
//     for (let i = 0; i < k; i++) {
//         largestValues.push(nums[i])
//     }

//     for (let i = k; i < nums.length; i++) {
//         // find the smallest value in the set
//         const smallestIndex = largestValues.reduce((smallestId, current, index) => {
//             const smallest = largestValues[smallestId]
//             return (smallest > current) ? index : smallestId;
//         }, 0);

//         // check if the current value is larger than the smallest set item
//         // if it is, replace the smallest item in the set
//         if (nums[i] > largestValues[smallestIndex]) {
//             largestValues[smallestIndex] = nums[i]
//         }
//     }

//     return Math.min(...largestValues);
// };

// function shortCircuitInsertionSort (arr: Array<number>, newVal: number, limit: number): void {
//     // slow POC
//     arr.push(newVal)
//     arr.sort((a,b) => b-a)
//     arr.splice(limit)
// }

// // with insertion sort, but too slow. Should use a heap, but I am too lazy to write out a binary tree lol
// function findKthLargest(nums: number[], k: number): number {
//     const largestValues : Array<number> = [];

//     for (let i = 0; i < nums.length; i++) {
//         // shortCircuitInsertionSort(largestValues, nums[i], k)

//         const arrLength = largestValues.length
//         let smallest = nums[i]
//         for (let j = 0; j <= arrLength && j < k; j++) {
//             if (largestValues[j] === undefined) largestValues.push(smallest)
//             else if (largestValues[j] < smallest) {
//                 const temp = largestValues[j]
//                 largestValues[j] = smallest
//                 smallest = temp
//             }
//         }
//     }

//     return largestValues[largestValues.length -1]
// };


function findKthLargest(nums: number[], k: number): number {
    return nums.sort((a,b) => b-a)[k-1];
};
