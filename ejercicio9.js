function sumNumbers(numberList) {
  let sum = 0 // Inicializamos la suma en 0

  for (let number of numberList) {
    sum += number // Sumamos cada número al total
  }

  return sum // Devolvemos la suma total
}

// Ejemplo de uso
const numbers = [1, 2, 3, 5, 45, 37, 58]
console.log(sumNumbers(numbers)) // Resultado esperado: 151
