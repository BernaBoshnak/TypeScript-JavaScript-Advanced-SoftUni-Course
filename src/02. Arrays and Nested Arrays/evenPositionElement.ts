function evenPositionElement(input: Array<string>) {
  const result: number[] = []

  for (let i = 0; i < input.length; i += 2) {
    result.push(Number(input[i]))
  }
  console.log(result.join(' '))
}

evenPositionElement(['20', '30', '40', '50', '60'])

export {}
