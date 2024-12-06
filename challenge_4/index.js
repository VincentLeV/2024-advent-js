/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  let result = ""
  let trunkSpaces = ""
  for (let i = 0; i < height; i++) {
    const spaces = "_".repeat(height - i - 1)
    if (i === 0) {
      trunkSpaces = spaces
    }
    const ornaments = ornament.repeat(i * 2 + 1)
    result += `${spaces}${ornaments}${spaces}\n`
  }
  result += `${trunkSpaces}#${trunkSpaces}\n`
  result += `${trunkSpaces}#${trunkSpaces}`
  return result
}

const tree = createXmasTree(3, '*')
console.log(tree)