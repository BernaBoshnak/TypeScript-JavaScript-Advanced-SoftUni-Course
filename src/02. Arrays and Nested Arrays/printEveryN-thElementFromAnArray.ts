function printEveryElementFromAnArray(input: Array<string>, step: number) {
  const result: string[] = []

  for (let i = 0; i < input.length; i++) {
    if (!(i % step)) {
      result.push(input[i])
    }
  }

  return result
}

console.log(printEveryElementFromAnArray(['5', '20', '31', '4', '20'], 2))

export {}
