function squareOfStars(input: number | string) {
  const star = '* '

  if (input === '' || input === null || input === 0) {
    for (let i = 0; i < 5; i++) {
      console.log(`${star.repeat(5).trim()}`)
    }
  } else {
    for (let i = 0; i < input; i++) {
      console.log(`${star.repeat(Number(input)).trim()}`)
    }
  }
}

squareOfStars(7)

export {}
