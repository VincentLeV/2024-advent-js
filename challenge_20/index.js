/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const counts = (arr) => arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const receivedCounts = counts(received);
  const expectedCounts = counts(expected);

  const missing = {};
  const extra = {};

  Object.keys(expectedCounts).forEach(item => {
    const diff = expectedCounts[item] - (receivedCounts[item] || 0);
    if (diff > 0) missing[item] = diff;
  });

  Object.keys(receivedCounts).forEach(item => {
    const diff = receivedCounts[item] - (expectedCounts[item] || 0);
    if (diff > 0) extra[item] = diff;
  });

  return { missing, extra };
}

console.log(fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
))
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }