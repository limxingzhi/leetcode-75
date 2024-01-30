// // slower method of not using a graph
// function minReorder(n: number, connections: number[][]): number {
//     let count = 0;
//     const connected = new Set<number>();
//     connected.add(0)

//     while (connections.length > 0) {
//         const current = connections.shift();

//         if (!connected.has(current[0]) && !connected.has(current[1])) {
//             // push to back until we find something new
//             connections.push(current)
//         }
//         else if (connected.has(current[0]) && !connected.has(current[1])) {
//             // source node is connected, destination node is not, so we gotta "flip the edge"
//             count++
//             connected.add(current[1])
//         } else if (!connected.has(current[0]) && connected.has(current[1])) {
//             // destination node is connected, source node isn't, do nothing
//             connected.add(current[0])
//         } else {
//             console.log(`something's wrong`)
//         }
//     }

//     return count
// };


// build a bi-directional graph, and then tranverse the entire graph
function minReorder(n: number, connections: number[][]): number {
    // a graph that stores all of its neighbors node and the direction
    const graph = new Map<number, Array<[number, boolean]>>();
    for (let i = 0; i < connections.length; i+=1) {
        const [src,dst] = connections[i];

        if (!graph.has(src)) graph.set(src, []);
        if (!graph.has(dst)) graph.set(dst, []);

        graph.get(src).push([dst, true]);
        graph.get(dst).push([src, false]);
    }

    let count = 0;
    const stack = [0];
    const visited = new Set<number>();

    // iterate graph
    while (stack.length > 0) {
        const node = stack.pop();
        visited.add(node);

        // get neighbors
        const neighbors = graph.get(node);

        // iterate neighbors and see which one need to flip
        for (let i = 0; i < neighbors.length; i+=1) {
            const [next, flag] = neighbors[i]

            // we only care about those that hasn't been visited
            if (!visited.has(next)) {
                stack.push(next);

                // increment count if we need to flip the direction
                if (flag) count ++;
            }
        }
    }

    return count;
}
