/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  if (box.every(row => !row.includes('*'))) return false
  const index = box.findIndex(row => row.includes('*'))
  if (index === 0 || index === box.length - 1) return false
  return !!box[index].match(/#\s*\*\s*#/g)
}

console.log(inBox([
  "#*#",
  "###",
  "###"
])) // false

console.log(inBox([
  "###",
  "#*#",
  "###"
])) // true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])) // true

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
])) // false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])) // false