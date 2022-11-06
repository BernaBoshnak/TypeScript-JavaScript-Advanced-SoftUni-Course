function aggregateElements(input: Array<number>) {
  let sum = 0
  let secondSum = 0

  for (let i = 0; i < input.length; i++) {
    sum += input[i]
    secondSum += 1 / input[i]
  }

  console.log(`${sum}\n${secondSum}\n${input.join('')}`)
}

aggregateElements([2, 4, 8, 16])

export {}
