function sortingNumbers(input: Array<number>) {
  const result: number[] = []

  input.sort((a, b) => a - b)
  while (input.length) {
    const firstElement = input.shift()
    const lastElement = input.pop()

    if (firstElement && lastElement) {
      result.push(firstElement)
      result.push(lastElement)
    }
  }

  return result
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

export {}
