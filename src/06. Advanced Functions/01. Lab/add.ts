type Add = number

function solution(n: Add) {
  const inputNum = n

  return function add(givenNum: Add) {
    return inputNum + givenNum
  }
}

const add5 = solution(5)
console.log(add5(2))
console.log(add5(3))

const add7 = solution(7)
console.log(add7(2))
console.log(add7(3))

export {}
