function equalPairs(grid: number[][]): number {
    const rowHashmap = new Map<string, number>();
    const colHashmap = new Map<string, number>();

    // O(n^2)
    grid.forEach((row , i) => {
        let rowString = ''
        let colString = ''
        row.forEach((_, j) => {
            rowString += '-' + grid[i][j]
            colString += '-' + grid[j][i]
        })
        rowHashmap.set(rowString, (rowHashmap.get(rowString) ?? 0) + 1)
        colHashmap.set(colString, (colHashmap.get(colString) ?? 0) + 1)
    })

    let output = 0;
    // O(n^2)
    Array.from(rowHashmap.entries()).forEach(([rowString, rowCount]) => {
        const colCount = colHashmap.get(rowString) ?? 0
        if (colCount > 0)
            output += (colCount * rowCount)
    })

    return output
};
