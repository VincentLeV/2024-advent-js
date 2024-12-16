/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  const keys = Object.keys(data[0])
  const maxValues = keys.map(key => 
    Math.max(key.length, ...data.map(row => String(row[key]).length))
  );
  const borders = '+' + maxValues.map(max => '-'.repeat(max + 2)).join('+') + '+';
  const header = '| ' + keys.map((key, index) => (key.slice(0, 1).toUpperCase() + key.slice(1)).padEnd(maxValues[index])).join(' | ') + ' |';
  const rows = data.map(row => 
    '| ' + keys.map((key, index) => String(row[key]).padEnd(maxValues[index])).join(' | ') + ' |'
  ).join('\n');

  return `${borders}\n${header}\n${borders}\n${rows}\n${borders}`;
}

console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]))

console.log(drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]))