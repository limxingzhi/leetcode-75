function longestSubarray(nums: number[]): number {
    let start = 0
    let end = 0

    let max = 0
    let current = 0

    let removed = -1

    while (end < nums.length) {
        if (nums[end]) {
            current++
        } else {
            if (removed >= 0) {
                start = removed+1
                current = end - start
                removed = end
            } else {
                removed = end
            }
        }

        max = max > current ? max : current

        end ++
    }

    return max === nums.length ? max-1 : max;
};
