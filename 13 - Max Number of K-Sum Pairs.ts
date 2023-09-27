function maxOperations(nums: number[], k: number): number {
  // so the idea is, you want to maintain a hashmap where the key is k - n[i]
  // and the value is the amout of entries we have

  const hashmap = new Map<number, number>();

  return nums.reduce((count, item, key) => {
    const target = k - item
    const entriesCount = hashmap.get(target)

    if (entriesCount) {
      // item found in hash map
      hashmap.set(target, entriesCount -1)
      return count + 1;
    } else {
      // item not found in hash map
      // add item into hashmap
      const val = hashmap.get(item) ?? 0;
      hashmap.set(item, val +1)
      return count
    }

  }, 0)
};
