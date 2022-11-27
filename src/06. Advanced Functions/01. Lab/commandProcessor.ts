function solution() {
  type RemoveChar = number
  let status = ''

  return {
    append: (str: string) => (status += str),
    removeStart: (n: RemoveChar) => (status = status.substring(n)),
    removeEnd: (n: RemoveChar) =>
      (status = status.substring(0, status.length - n)),
    print: () => console.log(status),
  }
}

const firstZeroTest = solution()

firstZeroTest.append('hello')
firstZeroTest.append('again')
firstZeroTest.removeStart(3)
firstZeroTest.removeEnd(4)
firstZeroTest.print()

export {}
