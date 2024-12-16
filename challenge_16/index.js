/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  let prev;
  do {
    prev = s;
    s = s.replace(/(.)\1/g, ''); // \1 refers to the first captured group (.)
  } while (s !== prev);
  return s;
}

console.log(removeSnow('zxxzoz')) // -> "oz"

console.log(removeSnow('abcdd')) // -> "abc"

console.log(removeSnow('zzz')) // -> "z"
