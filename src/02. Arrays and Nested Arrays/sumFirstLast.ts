function sumFirstLast(input: Array<string>) {
  const first = Number(input.shift())
  const last = Number(input.pop())

  return first + last
}

console.log(sumFirstLast(['20', '30', '40']))

export {}
