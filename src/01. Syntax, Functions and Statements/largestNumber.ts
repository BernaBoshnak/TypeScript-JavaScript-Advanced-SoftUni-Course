type Argument = number

function largestNumber(
  firstNum: Argument,
  secondNum: Argument,
  thirdNum: Argument,
) {
  const printText = 'The largest number is '

  if (firstNum > secondNum && firstNum > thirdNum) {
    console.log(`${printText}${firstNum}.`)
  } else if (secondNum > firstNum && secondNum > thirdNum) {
    console.log(`${printText}${secondNum}.`)
  } else if (thirdNum > firstNum && thirdNum > secondNum) {
    console.log(`${printText}${thirdNum}.`)
  }
}

largestNumber(-3, -5, -22.5)

export {}
