function subSum(
  arr: Array<number | string>,
  startIndex: number,
  endIndex: number,
) {
  if (Array.isArray(arr) === false) {
    return NaN
  }

  if (startIndex < 0) {
    startIndex = 0
  }

  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1
  }

  return arr
    .slice(startIndex, endIndex + 1)
    .reduce((a, c) => Number(a) + Number(c), 0)
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(subSum([10, 'twenty', 30, 40], 0, 2))
console.log(subSum([], 1, 2))

export {}
