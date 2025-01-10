function averageWord(list) {
  let totalSum = 0
  let count = 0

  for (let element of list) {
    if (typeof element === 'number') {
      totalSum += element
    } else if (typeof element === 'string') {
      totalSum += element.length
    }
    count++
  }

  return totalSum / count
}

const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
console.log(averageWord(mixedElements))
