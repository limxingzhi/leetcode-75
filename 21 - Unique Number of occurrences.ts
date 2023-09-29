function uniqueOccurrences(arr: number[]): boolean {
    const hashmap = new Map<number, number>()

    // iterate array to build hashmap
    arr.forEach((item) => {
        hashmap.set(item, (hashmap.get(item) ?? 0 )+ 1)
    })

    // set to store the counts to make sure they are unique
    const countSet = new Set<number>(hashmap.values())

    // iterate hashmap to find if two items repeat
    return hashmap.size === countSet.size
};
