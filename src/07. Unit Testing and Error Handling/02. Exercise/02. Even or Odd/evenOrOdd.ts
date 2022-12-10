function isOddOrEven(input: string) {
  if (typeof input !== 'string') {
    return undefined
  }

  if (input.length % 2 === 0) {
    return 'even'
  }

  return 'odd'
}

export default isOddOrEven
