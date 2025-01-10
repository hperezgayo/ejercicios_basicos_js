function repeatCounter(list) {
  const wordCounts = {}

  for (let word of list) {
    if (wordCounts[word]) {
      wordCounts[word]++
    } else {
      wordCounts[word] = 1
    }
  }

  return wordCounts
}

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

console.log(repeatCounter(words))
