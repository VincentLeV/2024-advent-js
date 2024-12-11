/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registers = {}
  const commands = {
    MOV: (x, y) => registers[y] = registers[x] || parseInt(x),
    INC: (x, y) => registers[x]++,
    DEC: (x, y) => registers[x]--,
    JMP: (x, y) => !registers[x] && (index = y - 1)
  }

  let index = 0;

  while (index < instructions.length) {
    const [action, x, y] = instructions[index].split(" ");
    if (!registers[x]) registers[x] = 0
    commands?.[action](x, y)
    index++;
  }

  return registers.A
}

const instructions = [
  'MOV -1 C', // copies -1 to register 'C',
  'INC C', // increments the value of register 'C'
  'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
  'MOV C A', // copies register 'C' to register 'A',
  'INC A' // increments the value of register 'A'
]

console.log(compile(instructions))
