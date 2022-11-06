function greatestCommonDivisor(firstNum: number, secondNum: number) {
  while (secondNum != 0) {
    const temp = secondNum
    secondNum = firstNum % secondNum
    firstNum = temp
  }
  return firstNum
}

console.log(greatestCommonDivisor(2154, 458))

export {}
