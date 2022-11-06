type Argument = number
type Operator = '+' | '-' | '*' | '/' | '%' | '**'

function mathOperations(
  firstNum: Argument,
  secondNum: Argument,
  operator: Operator,
) {
  switch (operator) {
    case '+':
      return firstNum + secondNum
    case '-':
      return firstNum - secondNum
    case '*':
      return firstNum * secondNum
    case '/':
      return firstNum / secondNum
    case '%':
      return firstNum % secondNum
    case '**':
      return firstNum ** secondNum
  }
}

console.log(mathOperations(3, 5.5, '*'))

export {}
