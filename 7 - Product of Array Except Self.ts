// function to build the multiplication array
function reducer ({output, prefix}, current) {
  return {output : [...output, prefix], prefix: prefix * current}
}

// realistically, I would write this on an Frontend app, but I guess there
// are leetcode edge cases which makes native array functions too slow
function productExceptSelfTooSlowToRun(nums: number[]): number[] {
  const prefixes = nums.reduce(reducer, { output: [], prefix: 1 }).output
  const suffixes = nums.reverse().reduce(reducer, { output: [], prefix: 1 }).output.reverse()

  return prefixes.map((item, key) => item * suffixes[key])
};

// =====

function productExceptSelf(nums: number[]): number[] {
  const prefixes = []
  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    prefixes.push(prefix)
    prefix *= nums[i]
  }

  const output = []
  let suffix = 1
  for (let i = nums.length -1; i >= 0; i--) {
    output[i] = suffix * prefixes[i]
    suffix *= nums[i]
  }
  
  return output
};
