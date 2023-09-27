// seems like reduce is a bit too slow
function findMaxAverageWithReduce(nums: number[], k: number): number {

    // pick the first k items from the array and mutate original array
    const starter = nums.splice(0,k);

    let max = starter.reduce((item1, item2)=>  item1 + item2, 0) / k

    // sliding window
    nums.reduce(([, ...arr], current) => {
        // find average of previous
        max = Math.max(max, (arr.reduce((item1, item2)=>  item1 + item2, 0) + current) / k)
        return [...arr, current]
    }, starter)

    return max
};

function findMaxAverage(nums: number[], k: number): number {
    let temp = 0

    // setup initial value
    for (let i = k-1; i >= 0; i--) {
        temp += nums[i]
    }

    temp /= k

    let max = temp

    // sliding window
    for (let i = k; i < nums.length; i++) {
        temp = (temp * k + nums[i] - nums[i - k]) / k
        max = max > temp ? max : temp;
    }

    return max
};
