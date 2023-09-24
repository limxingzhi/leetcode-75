function mergeAlternately(word1: string, word2: string): string {
    let out = '';

    // only runs when both strings are truthy (not empty)
    while (word1 && word2) {
        // append the first character (wouldn't be null because the values are truthy)
        out += word1[0]

        // pop first char from the string
        word1 = word1.slice(1)

        out += word2[0]
        word2 = word2.slice(1)
    }

    // since one of the strings is an empty string, we can just add both of
    // them to the output and whichever is longer would be appended to the back
    out += word1
    out += word2

    return out
};
