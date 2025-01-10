function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log('El número más alto es:', numberOne)
  } else if (numberTwo > numberOne) {
    console.log('El número más alto es:', numberTwo)
  } else {
    console.log('Ambos números son iguales:', numberOne)
  }
}

greaterNumber(10, 20) // El número más alto es: 20
greaterNumber(30, 15) // El número más alto es: 30
greaterNumber(5, 5) // Ambos números son iguales: 5
