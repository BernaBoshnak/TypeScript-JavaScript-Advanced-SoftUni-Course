function biggerHalf(input: Array<number>) {
  return input.sort((a, b) => a - b).slice(input.length / 2)
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))

export {}
