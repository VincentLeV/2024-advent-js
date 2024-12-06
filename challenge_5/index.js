/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
// function organizeShoes(shoes) {
//   const organized = shoes.reduce((acc, shoe) => {
//     let targetKey = shoe.size.toString();
    
//     // Find a key that can accept the current shoe type
//     while (acc[targetKey] && acc[targetKey].includes(shoe.type)) {
//       const suffix = targetKey.split('_')[1];
//       const newSuffix = suffix ? parseInt(suffix) + 1 : 1;
//       targetKey = `${shoe.size}_${newSuffix}`;
//     }

//     // If no suitable key is found, use the original size key
//     if (!acc[targetKey]) {
//       acc[targetKey] = [];
//     }

//     // Add the shoe type to the target key
//     acc[targetKey].push(shoe.type);

//     // Ensure each key has only one "R" and one "I"
//     acc[targetKey] = [...new Set(acc[targetKey])];

//     return acc;
//   }, {});

//   return Object.entries(organized)
//     .filter(([_, types]) => types.length >= 2)
//     .map(([size]) => parseInt(size.split('_')[0]));
// }

function organizeShoes(shoes) {
  const organized = shoes.reduce((acc, shoe) => {
    let targetKey = shoe.size.toString();
    
    // Find a key that can accept the current shoe type
    while (acc[targetKey] && acc[targetKey].includes(shoe.type)) {
      const suffix = targetKey.split('_')[1];
      const newSuffix = suffix ? parseInt(suffix) + 1 : 1;
      targetKey = `${shoe.size}_${newSuffix}`;
    }

    // If no suitable key is found, use the original size key
    if (!acc[targetKey]) {
      acc[targetKey] = [];
    }

    // Add the shoe type to the target key
    acc[targetKey].push(shoe.type);

    // Ensure each key has only one "R" and one "I"
    acc[targetKey] = [...new Set(acc[targetKey])];

    return acc;
  }, {});

  const result = Object.entries(organized).reduce((acc, [size, types]) => {
    const count = types.reduce((typeAcc, type) => {
      if (type === 'I') {
        typeAcc.I += 1;
      } else if (type === 'R') {
        typeAcc.R += 1;
      }
      return typeAcc;
    }, { I: 0, R: 0 });

    if (count.I === count.R) {
      for (let i = 0; i < count.I; i++) {
        acc.push(parseInt(size.split('_')[0]));
      }
    } else if (count.I > count.R) {
      for (let i = 0; i < count.R; i++) {
        acc.push(parseInt(size.split('_')[0]));
      }
    } else if (count.R > count.I) {
      for (let i = 0; i < count.I; i++) {
        acc.push(parseInt(size.split('_')[0]));
      }
    }
    return acc 
  }, [])
  return result
}

// Example usage:
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
];

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
];

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
];

const shoes4 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 },
];

console.log(organizeShoes(shoes));
console.log(organizeShoes(shoes2));
console.log(organizeShoes(shoes3));
console.log(organizeShoes(shoes4));