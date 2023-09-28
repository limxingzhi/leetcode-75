function longestOnes(nums: number[], k: number): number {
    let start = 0
    let end = 0

    let max = k

    let flippedCount = 0

    while (end < nums.length) {
        if (nums[end]) { // if number is 1, expand the window
            end++
        } else {
            // check if we can flip
            if (k > flippedCount) {
                // flip without worrying
                flippedCount++
                end++
            } else {
                // check if we can free up flipped numbers
                if (nums[start] === 0) {
                    flippedCount--
                }

                // move window foward
                start++
            }
        }

        const newWindowSize = end - start
        max = max > newWindowSize ? max : newWindowSize;
    }

    return max
}
