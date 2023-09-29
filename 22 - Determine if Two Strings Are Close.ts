// we can check for operation 1 with 
// "if sort the characters, do we get the same output?"

// we can check for operation 2 with
// "if we count each existing letters, do we get the same numbers?"
// e.g. "aabbbcccc" is 2a, 3b, 4c -> 2,3,4 -> we just have to check if the other string is also 2,3,4
// AND "do they have the same exact alphabets"

// BUT basically, we can check if the 2 of them are the same via a few simple rules
// 1. do they have the exact same set of letters
//    a. does the alphabet set has the same size
//    b. does all of the letters in set 1 has a 1-1 mapping in set 2
// 2. does they have the same count of letters (e.g. 2a3c is the same as 2f3y)

// overall, O(n log n) time complexity
function closeStrings(word1: string, word2: string): boolean {
    // if they don't have the same length, they would never match
    if ((word1.length < word2.length)) return false

    const hashmap1 = new Map<string, number>()
    const hashmap2 = new Map<string, number>()

    // O(n) complexity
    word1.split('').forEach((item1, key) => {
        const item2 = word2[key]

        hashmap1.set(item1, (hashmap1.get(item1) ?? 0) + 1)
        hashmap2.set(item2, (hashmap2.get(item2) ?? 0) + 1)
    })

    // check 1a : does the alphabet set has the same size
    if (hashmap1.size !== hashmap2.size) return false
    if (hashmap1.size === 0) return true

    // O(n) complexity
    // check 1b : does all of the letters in set 1 has a 1-1 mapping in set 2
    const letters1 = Array.from(hashmap1.keys()) 
    if (!letters1.every(item => hashmap2.has(item))) return false

    // O(n log n) complexity due to .sort
    // check 2 : does they have the same count of letters (e.g. 2a3c is the same as 2f3y)
    return Array.from(hashmap1.values()).sort().join('.') === Array.from(hashmap2.values()).sort().join('.')
}
