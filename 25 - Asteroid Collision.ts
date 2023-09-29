function asteroidCollision(asteroids: number[]): number[] {
  const output = [];
  while (asteroids.length > 0) {
    const current = asteroids.shift()
    if (output.length === 0) {
        output.push(current)
    } else if (current < 0) {
      // fight with left
      const contestant = output.pop()
      if (contestant > 0 && current < 0) {
        // fighting required
        if (contestant > current * -1) {
          output.push(contestant)
        } else if (contestant < current * -1) {
          // contestant loses, keep fighting the previous item in the output stack
          asteroids.unshift(current)
        } else { /* both explode, do nothing */ }
      } else {
        // no fighting
        output.push(contestant)
        output.push(current)
      }
    } else if (current > 0) {
      // no fighting
      output.push(current)
    }
  }

  return output;
};
