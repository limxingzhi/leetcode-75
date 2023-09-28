function largestAltitude(gain: number[]): number {
    let current = 0 // start at ground
    return gain.reduce((max, diff) => {
        current += diff
        max = max > current ? max : current
        return max
    }, current)
};
