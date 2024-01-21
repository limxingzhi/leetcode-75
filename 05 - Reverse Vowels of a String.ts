function isVowel (s : string) {
    s = s.toLowerCase()
    return s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u'
}


function reverseVowelsSlow(s: string): string {
    let output = s.split('');
    const vowels : Array<[number, string]> = [];
    output.forEach((item, index) => {
        if (isVowel(item)) {
            vowels.push([index, item])
        }
    })

    vowels.forEach((item, key) => {
        const replacement = vowels[vowels.length - key - 1]
        output[item[0]] = replacement[1]
    })

    return output.join('');
};

function reverseVowels(s: string): string {
    let output = s.split('');
    let start = 0;
    let end = s.length -1;

    while (start < end) {
        if (isVowel(output[start]) && isVowel(output[end])) {
            const temp = output[start]
            output[start] = output[end]
            output[end] = temp
            start++;
            end--;
        } else if (isVowel(output[start])) {
            end--
        } else if (isVowel(output[end])) {
            start++
        } else {
            start++; end--;
        }

    }

    return output.join('');
};
