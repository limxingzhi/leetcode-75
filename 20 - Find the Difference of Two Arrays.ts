function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set0 = new Set<number>(nums1)
    const set1 = new Set<number>()

    const set0Deleted = new Set<number>()

    nums2.forEach((item) => {
        // if the 1st set doesn't have the item, add it into the 2nd set
        if (!set0.has(item) && !set0Deleted.has(item)) { set1.add(item) }
        
        // remove item from the first set when it exist in the 2nd array
        // also add it into the deleted set
        if (set0.delete(item)) { set0Deleted.add(item) }
    })

    return [Array.from(set0), Array.from(set1)]
};
