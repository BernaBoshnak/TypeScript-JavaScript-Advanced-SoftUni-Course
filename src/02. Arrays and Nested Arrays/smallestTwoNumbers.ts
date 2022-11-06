function smallestTwoNumbers(input: Array<number>) {
  const sorted = input.sort((a, b) => a - b)

  return sorted.splice(0, 2).join(' ')
}

console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]))

export {}
