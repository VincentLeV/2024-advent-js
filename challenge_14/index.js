/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  const sortedStables = stables.sort((a, b) => a - b)
  const sortedReindeer = reindeer.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < reindeer.length; i++) {
    result += Math.abs(sortedStables[i] - sortedReindeer[i])
  }
  return result
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3

console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // -> 8

console.log(minMovesToStables([5, 15, 10], [8, 18, 12])) // -> 8