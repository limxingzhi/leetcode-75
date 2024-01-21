function increasingTriplet(nums: number[]): boolean {
    let left = Infinity;
    let mid = Infinity;

    for (let i = 0; i < nums.length; i++) {
        // found new mid
        if (left < nums[i] && mid > nums[i]) mid = nums[i]

        // found new left
        if (left > nums[i]) left = nums[i]

        // found triplet
        if (left < mid && mid < nums[i]) return true
    }

    return false;
};
