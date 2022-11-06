function processOddPositions(input: Array<number>) {
  return input
    .filter((_, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(' ')
}

console.log(processOddPositions([3, 0, 10, 4, 7, 3]))

export {}
