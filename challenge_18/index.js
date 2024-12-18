/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/;
  const nameRegex = /<([^>]+)>/;

  const filtered = agenda.split('\n').filter(line => line.includes(phone))
  if (filtered.length !== 1) return null

  const [result] = filtered

  const address = result
    .replace(result.match(phoneRegex)[0], '')
    .replace(result.match(nameRegex) ? result.match(nameRegex)[0] : '', '')
    .trim();

  if (!result.match(nameRegex)[1] || !address) return null

  return { name: result.match(nameRegex)[1], address }
}


const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explanation: No results

console.log(findInAgenda(agenda, '1'))
// null
// Explanation: Too many results