function sum(arr: Array<number>) {
  let sum = 0

  for (const num of arr) {
    sum += Number(num)
  }

  return sum
}

export default sum
