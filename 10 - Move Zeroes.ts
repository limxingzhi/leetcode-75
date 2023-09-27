/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let arrLength = nums.length
    for (let i = 0; i < arrLength; i++) {
        if (nums[i] === 0) {
            // destructure element after splicing
            const element = nums.splice(i, 1)

            // append new element to the back
            nums.push(element[0])

            // adjust iteration configuration
            arrLength --
            i --
        }
    }

    return
};
