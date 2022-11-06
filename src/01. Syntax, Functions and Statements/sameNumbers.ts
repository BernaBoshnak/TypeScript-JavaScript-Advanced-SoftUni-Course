function sameNumbers(input: number) {
  const string = input.toString()
  let isSame = true
  let sum = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1] && string[i + 1] !== undefined) {
      isSame = false
    } else {
      isSame
    }

    sum += Number(string[i])
  }
  return `${isSame}\n${sum}`
}

console.log(sameNumbers(2222222))

export {}
