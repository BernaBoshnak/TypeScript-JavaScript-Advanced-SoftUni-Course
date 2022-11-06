function biggestElement(matrix: Array<number[]>) {
  const reducer = matrix.reduce((acc, c) => acc.concat(c))
  return Math.max(...reducer)
}

console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ]),
)

export {}
