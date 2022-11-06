function sumOfNumbers(n: string, m: string) {
  let result = 0

  for (let i = Number(n); i <= Number(m); i++) {
    result += i
  }
  console.log(result)
}

sumOfNumbers('-8', '20')

export {}
