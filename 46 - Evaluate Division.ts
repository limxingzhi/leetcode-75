// the idea is to a bidirectional graph
// the original route is the answer, the reverse route is the 1/answer
// finding the solution is just tranversing the path
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    // build graph
    const graph = new Map<string, Array<{node: string, val: number }>>()

    for (let i = 0; i < equations.length; i++) {
        // initialize values in graph
        if (!graph.has(equations[i][0])) graph.set(equations[i][0], [])
        if (!graph.has(equations[i][1])) graph.set(equations[i][1], [])

        // populate neighbors
        graph.get(equations[i][0]).push({node: equations[i][1], val: values[i]})
        graph.get(equations[i][1]).push({node: equations[i][0], val: (1/values[i])})
    }

    // iterate queries and find solution
    // for (let i = 0; i < queries.length; i++) {
    return queries.map((currentQuery) => {
        const [src,dst] = currentQuery

        // shortcircuit
        if (!graph.has(src) || !graph.has(dst)) return -1

        // shortcircut
        if (src === dst) {
            return 1
        }

        // tranverse graph
        const visited = new Set<string>();
        const queue: Array<{ product: number, node: string  }>
            = [{product: 1, node: src}];
        while (queue.length > 0) {
            const {product, node} = queue.pop()
            if (visited.has(node)) continue
            if (node === dst) {
                return product
            } else {
                visited.add(node)
                const neighbors = graph.get(node)

                // add neighbors with updated product into graph
                queue.push(...neighbors.map(item => ({
                    node: item.node,
                    product: item.val * product
                })))
            }
        }

        // nothing found
        return -1
    })
};
