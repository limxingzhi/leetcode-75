// initially I had a visited set to store items,
// but the fastest solutions didn't have that,
// so I updated mine to remove that too
function nearestExit(maze: string[][], entrance: number[]): number {

    const queue: Array<{pos:[number, number], path: number}> = [];

    // setup initial queue with entrance and four sides
    queue.push({pos: entrance as [number, number], path: 0})

    maze[entrance[0]][entrance[1]] = '+'
    
    // tranverse map
    while (queue.length > 0) {
        const {pos: [row, col], path} = queue.shift();

        if (
            (row === 0 || row === maze.length -1 || col === 0 || col === maze[0].length -1)
            && !(row === entrance[0] && col === entrance[1])
        )
            return path

        // search 4 sides for blank space
        // and shut it off after adding to queue to prevent revisits
        // top
        if (maze[row-1]?.[col] === '.') {
            queue.push({pos : [row-1,col], path: path+1 })
            maze[row-1][col] = '@'
        }
        // bottom
        if (maze[row+1]?.[col] === '.') {
            queue.push({pos : [row+1,col], path: path+1 })
            maze[row+1][col] = '@'
        }
        // left
        if (maze[row]?.[col-1] === '.') {
            queue.push({pos : [row,col-1], path: path+1 })
            maze[row][col-1] = '@'
        }
        // right
        if (maze[row]?.[col+1] === '.') {
            queue.push({pos : [row,col+1], path: path+1 })
            maze[row][col+1] = '@'
        }
    }

    return -1
};
