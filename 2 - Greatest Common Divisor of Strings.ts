// find the greatest common divisor
function findGcd (input1: number, input2: number) {
    const bigger = Math.max(input1, input2)
    const smaller = Math.min(input1, input2)

    let iterator = smaller;

    while (iterator > 0) {
        if (bigger % iterator === 0 && smaller % iterator === 0) {return iterator}
        else iterator --
    }

    return 1
}

function gcdOfStrings(str1: string, str2: string): string {
    // if the concat order is not the same both ways, there will be no common divisor
    if (str1 + str2 !== str2 + str1) return ''

    return str1.slice(0 , findGcd(str1.length, str2.length))
};
