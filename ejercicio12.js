function removeDuplicates(list) {
  const uniqueItems = [...new Set(list)]

  return uniqueItems
}

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

console.log(removeDuplicates(duplicates))
