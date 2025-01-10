function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind)

  if (index !== -1) {
    return { exists: true, position: index }
  } else {
    return { exists: false }
  }
}

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

console.log(nameFinder(names, 'Tony'))
console.log(nameFinder(names, 'Wanda'))
