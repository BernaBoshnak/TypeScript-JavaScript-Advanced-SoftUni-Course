function getFibonator() {
  let currentNum = 0
  let nextNum = 1

  return () => {
    const result = currentNum + nextNum
    currentNum = nextNum
    nextNum = result
    return currentNum
  }
}

const fib = getFibonator()
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())

export {}
