class RecentCounter {
    constructor() { }

    private queue : Array<number> = []

    ping(t: number): number {
        const target = t - 3000

        // discard all front values outside of the window
        while (this.queue[0] < target) { this.queue.shift(); }

        // add new item into queue
        this.queue.push(t)

        return this.queue.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
