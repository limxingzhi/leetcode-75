function maxArea(height: number[]): number {
    let left = 0
    let right = height.length -1
    // reducing Math function calls for _speed_
    let currentMax = (height[right] < height[left] ? height[right] : height[left]) * (right - left)
    while (right - left > 0) {
        if (height[left] > height[right]) {right --}
        else {left ++}
        // reducing Math function calls for _speed_
        const tempMax = (height[right] < height[left] ? height[right] : height[left]) * (right - left)
        currentMax = tempMax < currentMax ? currentMax : tempMax
    }

    return currentMax
};
