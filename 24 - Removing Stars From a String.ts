// treat the input as a stack and pop each item from the pack while keeping track of the star
function removeStars(s: string): string {
    let starCounter = 0
    let output = ''
    for (let i = s.length -1; i >= 0; i--) {
        if (s[i] === '*') { starCounter++ }
        else if (starCounter > 0) { starCounter -- }
        else output = s[i] + output
    }
    return output
};
