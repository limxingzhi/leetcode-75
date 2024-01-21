// note that we only care about giving candy to ONE kid
// if that one kid has the max amount of candy after we give it to him, it counts as TRUE
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    // find the kid with the max candy
    let max = candies.reduce((currentMax, current) => {
        return currentMax > current ? currentMax : current;
    }, -1);

    return candies.map((count) => {
        return count + extraCandies >= max
    })
};
