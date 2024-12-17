// function detectBombs(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const result = Array.from({ length: rows }, () => Array(cols).fill(0));

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       for (let x = -1; x <= 1; x++) {
//         for (let y = -1; y <= 1; y++) {
//           if (x === 0 && y === 0) continue;
//           const newX = i + x;
//           const newY = j + y;
//           if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === true) {
//             result[i][j]++;
//           }
//         }
//       }
//     }
//   }

//   return result;
// }

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  return grid.map((row, i) =>
    row.map((cell, j) => {
      let count = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;
          const newX = i + x;
          const newY = j + y;
          if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY]) {
            count++;
          }
        }
      }
      return count;
    })
  );
}

console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
  [false, true, false],
  [true, false, true],
  [false, true, false]
]));
// [
//   [2, 2, 2],
//   [2, 4, 2],
//   [2, 2, 2]
// ]

console.log(detectBombs([
  [true, true],
  [false, false],
  [true, true]
]));
// [
//   [1, 1],
//   [2, 2],
//   [1, 1]
// ]