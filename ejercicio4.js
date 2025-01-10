const aldeanos = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']

console.log('4.1 - El aldeano en la posición 3 es:', aldeanos[3])

aldeanos.push('Cervasio')
console.log("4.2 - Array después de añadir 'Cervasio':", aldeanos)

aldeanos[0] = 'Bambina'
console.log(
  "4.3 - Array después de cambiar el primer elemento a 'Bambina':",
  aldeanos
)

aldeanos.reverse()
console.log('4.4 - Array después de darle la vuelta:', aldeanos)

const indexNarciso = aldeanos.indexOf('Narciso')
if (indexNarciso !== -1) {
  aldeanos[indexNarciso] = 'Canela'
}
console.log("4.5 - Array después de cambiar 'Narciso' por 'Canela':", aldeanos)

console.log('4.6 - Último elemento del array:', aldeanos[aldeanos.length - 1])
