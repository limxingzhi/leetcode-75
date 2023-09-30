function decodeString(s: string): string {
    const input = s.split('')

    let indentCounter = 0
    const hashmap = new Map<number, string>() // record: indentCounter, value: captured group

    let output = []

    while (input.length > 0) {
        const current = input.pop()

        if (current === ']') {
            indentCounter ++
            continue
        }

        if (current === '[') {
            // capture the integers for the group
            let next = input.pop()
            let intCounter = 0
            let intCounterIterator = 0
            while (!isNaN(parseInt(next))) {
                intCounter = intCounter + parseInt(next) * Math.pow(10, intCounterIterator)
                next = input.pop()
                intCounterIterator ++
            }
            if (next) input.push(next)


            const group = hashmap.get(indentCounter)
            for (let i = 0; i < intCounter; i++) {
                if (indentCounter > 1) {
                    hashmap.set(indentCounter-1, group + (hashmap.get(indentCounter-1) ?? ''))
                } else {
                    output.unshift(group)
                }
            }
            hashmap.delete(indentCounter)
            indentCounter --

            continue
        }

        if (current.toUpperCase() !== current.toLowerCase()) {
            if (indentCounter > 0) {
                hashmap.set(indentCounter, current + (hashmap.get(indentCounter) ?? ''))
            } else {
                output.unshift(current)
            }
            continue
        }

        throw 500;
    }

    return output.join('')
};
