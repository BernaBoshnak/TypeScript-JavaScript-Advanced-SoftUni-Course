function wordsUppercase(text: string) {
  return text.toUpperCase().match(/\w+/g)?.join(', ')
}

console.log(wordsUppercase('Hi, how are you?'))

export {}
