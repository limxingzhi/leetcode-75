// the idea is to iterate the first row (which contains all of the nodes), BFS them and store visited into a set.
// each time we counter a new node, we BFS it + increment a counter
function findCircleNum(isConnected: number[][]): number {
    let count = 0

    // set of visited nodes
    const visited = new Set<number>();

    // iterate all of the nodes
    for (let i = 0; i < isConnected.length; i++) {
        // only start searching when starting node has not been visited
        // only increment when starting node has not been visited
        if (!visited.has(i)) {
            count++;

            const queue: Array<number> = [];

            for (let col1 = 0; col1 < isConnected.length; col1++) {
                if (isConnected[i][col1] === 1) queue.push(col1)
            }

            while (queue.length > 0) {
                const current = queue.shift();
                // only search if this node hasn't been searched before
                if (!visited.has(current)) {
                    // look for connecting nodes
                    for (let col1 = 0; col1 < isConnected.length; col1++) {
                        // add connecting node into search queue if not visited yet
                        if (isConnected[current][col1] === 1) queue.push(col1)
                    }

                    visited.add(current)
                }
            }
        }
    }

    return count
};
