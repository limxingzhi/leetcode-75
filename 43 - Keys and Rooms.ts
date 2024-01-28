// the idea is, each room that we want to visit, we add it into a queue / stack, and then keep track of the visited rooms
// and the end, we check the number of rooms visited against the number of rooms that exist
function canVisitAllRooms(rooms: number[][]): boolean {
    const visited = new Set<number>();
    const visitStack : Array<number> = [0] // queue or stack doesn't matter

    while (visitStack.length > 0) {
        // get the room to visit
        const currentNum = visitStack.pop()
        // visit room only if we havent visited it before
        if (!visited.has(currentNum)) {
            // add the keys into rooms we want to visit
            visitStack.push(...rooms[currentNum])

            // mark room a visited
            visited.add(currentNum)
        }
    }

    // if number of rooms visited = number of rooms exist, we would have visited all the rooms
    return (visited.size === rooms.length)
};
