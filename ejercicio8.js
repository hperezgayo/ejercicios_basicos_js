function findLongestWord(stringList) {
  let longestWord = ''

  for (let word of stringList) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
console.log(findLongestWord(avengers))
