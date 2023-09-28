function pivotIndex(nums: number[]): number {
    // get the sum of all number in the array
    const total = nums.reduce((prev, item) => item + prev, 0)

    let leftTotal = 0

    for (let i = 0; i < nums.length; i++) {
        // rightTotal is total - leftTotal - nums[i]
        // if the rightTotal is the same as leftTotal, we found our index
        if (total - leftTotal - nums[i] === leftTotal) { return i }

        // if not, increment the left total and continue
        else { leftTotal += nums[i] }
    }

    return -1
};

