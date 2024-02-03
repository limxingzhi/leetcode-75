function orangesRotting(grid: number[][]): number {
    // [row, val, mins]
    const queue: Array<[number, number, number]> = [];

    // build map
    // position = "row:col"
    const orangeMap = new Map<string, number>(); // key ; position, val = orange state

    for (let row = 0; row < grid.length; row++) {
        grid[row].map((state, col) => {
            switch (state) {
                case 2 :
                    // add all of the rotten oranges into queue
                    queue.push([row, col, 0])
                case 1 : 
                    // add orange into map if its rotten or fresh
                    orangeMap.set(row + ":" + col, state)
                    break
            }
        })
    }

    // short circuit when there are no oranges
    if (orangeMap.size === 0) return 0
    // short circuit when there are no rotten oranges
    else if (queue.length === 0) return -1

    const visited = new Set<string>();
    let highestMins = -1;

    function getNeighbors (row: number, col: number, newMins: number) : Array<[number, number, number]> {
        // add nodes from four sides if they are within bound
        const output : Array<[number, number]> = [];
        if (grid[row -1]?.[col])
            output.push([row-1, col])

        if (grid[row +1]?.[col])
            output.push([row+1, col])

        if (grid[row][col-1])
            output.push([row, col-1])

        if (grid[row][col+1])
            output.push([row, col+1])

        // remove nodes that are visited and add minutes
        return output
            .filter(([a,b]) => !visited.has(a + ':' + b))
            .map(item => ([...item, newMins]))
    }

    // iterate through the grid with rotten oranges as the starting nodes
    while (queue.length > 0) {
        // note: the visited set and BFS takes care when nodes are revisited
        const [row, col, mins] = queue.shift()

        // guard to allow only unvisited nodes
        if (!visited.has(row + ':' + col)) {
            // updated highest mins
            if (mins > highestMins) highestMins = mins

            // add neighbors into queue
            queue.push(...getNeighbors(row, col, mins+1))

            // mark as visited
            visited.add(row + ':' + col)
        }
    }

    // if some nodes are unvisited, it means they are not rotten
    if (visited.size !== orangeMap.size) return -1;

    return highestMins

};
