function average(numberList) {
  if (numberList.length === 0) {
    return 0
  }

  let sum = 0

  for (let number of numberList) {
    sum += number
  }

  return sum / numberList.length
}

// Ejemplo de uso
const numbers = [12, 21, 38, 5, 45, 37, 6]
console.log(average(numbers))
