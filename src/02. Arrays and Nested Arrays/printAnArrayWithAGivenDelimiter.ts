function printAnArrayWithAGivenDelimiter(words: Array<string>, symbol: string) {
  return words.join(symbol)
}

console.log(
  printAnArrayWithAGivenDelimiter(
    ['How about no?', 'I', 'will', 'not', 'do', 'it!'],
    '_',
  ),
)

export {}
