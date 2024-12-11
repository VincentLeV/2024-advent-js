/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const trainRow = board.findIndex(row => row.includes('@'))
  const trainPos = board[trainRow].indexOf('@')

  const result = {'*': 'eat', '·': 'none', 'o': 'crash', undefined: 'crash'}
  const moves = {
    U: [trainRow - 1, trainPos], 
    D: [trainRow + 1, trainPos], 
    L: [trainRow, trainPos - 1], 
    R: [trainRow, trainPos + 1]
  }
  const [hindrance, value] = moves[mov]

  return result[board[hindrance]?.[value]]
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right