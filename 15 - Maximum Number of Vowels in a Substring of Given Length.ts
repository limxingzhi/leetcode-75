function isVowel (target : string) {
    return (target === 'a' || target === 'e' || target === 'i' || target === 'o' || target === 'u') ? 1 : 0;
}

function maxVowels(s: string, k: number): number {
    let max = 0
    let sWindow = 0
    // check the initial window
    for (let i = k -1; i >= 0; i--) {
        sWindow += isVowel(s[i])
        max = sWindow
    }

    for (let i = k; i < s.length; i++) {
        sWindow = sWindow - isVowel(s[i-k]) + isVowel(s[i])
        max = Math.max(sWindow, max)
    }

    return max
};
