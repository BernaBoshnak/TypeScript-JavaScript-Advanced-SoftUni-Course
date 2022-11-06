function negativeOrPositiveNumbers(input: Array<number>) {
  const result: number[] = []

  for (const number of input) {
    if (number < 0) {
      result.unshift(number)
    } else {
      result.push(number)
    }
  }
  return result.join('\n')
}

console.log(negativeOrPositiveNumbers([3, -2, 0, -1]))

export {}
