function magicMatrices(matrix: Array<number[]>) {
  const rowSums: number[] = []
  const colSums: number[] = []

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    const sum = row.reduce((result, curr) => result + curr, 0)
    rowSums.push(sum)
  }

  for (let i = 0; i < matrix.length; i++) {
    const newRow: number[] = []

    for (let j = 0; j < matrix.length; j++) {
      const index = matrix.length - 1 - j
      newRow.push(matrix[index][i])
    }

    const sum = newRow.reduce((result, curr) => result + curr, 0)
    colSums.push(sum)
  }

  return rowSums.concat(colSums).every((el, i, array) => el === array[0])
}

console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ]),
)

export {}
