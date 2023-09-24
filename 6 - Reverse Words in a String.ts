function reverseWordsSlow(s: string): string {
    return s.split(' ').filter(item => item.length > 0).reverse().join(' ')
};

function reverseWords(s: string): string {
    return s.split(' ').reduce((output, current) => {
        if (current.length === 0) return output
        else return current + ' ' + output
    }, '').slice(0, -1)
};
