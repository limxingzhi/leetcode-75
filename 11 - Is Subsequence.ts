function isSubsequence(s: string, t: string): boolean {
    // we can just do a substring, but that's not really the point of this question
    let searchIndex = 0;
    if (t === '' && s === '') return true
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[searchIndex]) searchIndex ++
        if (searchIndex === s.length) return true
    }

    return false
};
