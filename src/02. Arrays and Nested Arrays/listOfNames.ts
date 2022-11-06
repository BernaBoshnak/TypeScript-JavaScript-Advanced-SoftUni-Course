function listOfNames(input: Array<string>) {
  return input
    .sort((a, b) => a.localeCompare(b))
    .map((name, i) => {
      return `${i + 1}.${name}`
    })
    .join('\n')
}

console.log(listOfNames(['John', 'Bob', 'Christina', 'Ema']))

export {}
