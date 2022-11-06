function diagonalSums(matrix: Array<string[]>) {
  let mainDiag = 0
  let secDiag = 0

  for (let i = 0; i < matrix.length; i++) {
    mainDiag += Number(matrix[i][i])
    secDiag += Number(matrix[i][matrix.length - i - 1])
  }
  console.log(mainDiag, secDiag)
}

diagonalSums([
  ['3', '5', '17'],
  ['-1', '7', '14'],
  ['1', '-8', '89'],
])

export {}
