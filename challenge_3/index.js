/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  return inventory.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = {}
    }

    if (acc[item.category][item.name]) {
      acc[item.category][item.name] += item.quantity
    } else {
      acc[item.category][item.name] = item.quantity
    }
    return acc
  }, {})
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory))