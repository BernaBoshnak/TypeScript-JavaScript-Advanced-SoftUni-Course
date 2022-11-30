function sortArray(array: Array<number>, type: 'asc' | 'desc') {
  const sortingStrategies = {
    asc: (a: number, b: number) => a - b,
    desc: (a: number, b: number) => b - a,
  }

  return array.sort(sortingStrategies[type])
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))

export {}
