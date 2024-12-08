// Solution 1
// function drawRace(indices, length) {
//   let result = ""
//   indices.forEach((position, i) => {
//     const getLineBreak = (index) => index < indices.length - 1 ? "\n" : ""
//     const getTab = (index) => " ".repeat(indices.length - 1 - index)

//     if (position < 0) position = length + position
//     if (position === 0) {
//       return result += getTab(i) + "~".repeat(length) + " /" + (i + 1) + getLineBreak(i)
//     }
//     result += getTab(i)
//     result += "~".repeat(position) + "r" + "~".repeat(length - position - 1) + " /" + (i + 1)
//     result += getLineBreak(i)
//   })
//   return result
// }

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let result = "";
  indices.forEach((position, i) => {
    if (position < 0) position = length + position;
    result += " ".repeat(indices.length - 1 - i);
    position > 0 
    ? result += "~".repeat(position) + "r" + "~".repeat(length - position - 1)
    : result += "~".repeat(length);
    result += " /" + (i + 1);
    if (i < indices.length - 1) result += "\n";
  });
  return result;
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/