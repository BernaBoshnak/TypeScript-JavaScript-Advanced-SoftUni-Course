function add(numArg: number) {
  function sum(internalSum: number) {
    numArg += internalSum
    return sum
  }

  sum.toString = () => numArg

  return sum
}

console.log(add(1)(6)(-3).toString())

export {}
