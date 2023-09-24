// I don't like this question. It asks for a in-place replacement for an JS array, which is VERY dangerous
function compress(chars: string[]): number {
    let currentLength = 0
    let currentChar = ''
    let output = ''
    for (let i = chars.length - 1; i >= 0; i--) {
        const current = chars.pop();
        if (currentChar !== current) {
            output = currentChar + (currentLength > 1 ? currentLength.toString() : '') + output
            currentChar = current
            currentLength = 1;
        } else {
            currentLength ++
        }

        if (i === 0) {
            output = currentChar + (currentLength > 1 ? currentLength.toString() : '') + output
        }
    }

    // hmmm.....
    chars.splice(0, Infinity)
    chars.push(...output.split(''))

    return output.length
}
