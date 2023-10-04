function predictPartyVictory(senate: string): string {
    const rQueue: Array<number> = []
    const dQueue: Array<number> = []

    // populate queues with indices of senators
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') rQueue.push(i)
        else if (senate[i] === 'D') dQueue.push(i)
    }

    // run voting rounds
    while (rQueue.length > 0 && dQueue.length > 0) {
        const currentR = rQueue.shift()
        const currentD = dQueue.shift()
        if (currentR < currentD) {
            // current R wins, D loses
            // add current R back into the queue for the next around of voting
            rQueue.push(currentR + senate.length)
        } else {
            // current D wins, R loses
            // add current D back into the queue for the next around of voting
            dQueue.push(currentD + senate.length)
        }
    }

    return rQueue.length > dQueue.length ? 'Radiant' : 'Dire'
}
