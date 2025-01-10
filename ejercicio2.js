const jedi = { nombre: 'Luke Skywalker', edad: 19 }

jedi.edad = 25

console.log(jedi)

//ejercicio 2.2//

let nombre = 'Leia'
let apellido = 'Organa'
let edad = 20

let mensaje =
  'Soy ' +
  nombre +
  ' ' +
  apellido +
  ', tengo ' +
  edad +
  ' años y soy una princesa de Alderaan.'
console.log(mensaje)

//ejercicio 2.3//

const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

const precioTotal = sable1.precio + sable2.precio

console.log(
  'El coste total de los sables de luz es: ' + precioTotal + ' créditos.'
)

//ejercicio 2.4//

let precioBaseGlobal = 25000

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}

nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal

console.log(
  'Precio final de la nave',
  nave1.nombre,
  ':',
  nave1.precioFinal,
  'créditos.'
)
console.log(
  'Precio final de la nave',
  nave2.nombre,
  ':',
  nave2.precioFinal,
  'créditos.'
)
