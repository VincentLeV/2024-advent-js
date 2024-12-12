/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const prices = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100
  }
  return ornaments.split('').reduce((result, ornament, index) => !prices[ornament] 
    ? undefined
    : result + (prices[ornament] < prices[ornaments[index + 1]] ? -prices[ornament] : prices[ornament])
  , 0);
}

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))  // 4   (5 - 1)
console.log(calculatePrice('#@Z'))  // undefined