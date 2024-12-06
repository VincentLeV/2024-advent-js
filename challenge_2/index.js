/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  const maxLength = Math.max(...names.map(name => name.length))
  const topAndBottom = "*".repeat(maxLength + 4)
  let content = ""
  names.forEach(name => {
    if (name.length < maxLength) {
      const spaces = " ".repeat(maxLength - name.length)
      content += `* ${name}${spaces} *\n`
    } else {
      content += `* ${name} *\n`
    }
  })
  return `${topAndBottom}\n${content}${topAndBottom}`
}

console.log(createFrame(['a', 'bb', 'ccc']))
