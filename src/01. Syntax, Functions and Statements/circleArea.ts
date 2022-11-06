function circleArea(input: string | number) {
  const inputType = typeof input

  if (inputType === 'number') {
    const area = Math.pow(Number(input), 2) * Math.PI
    console.log(area.toFixed(2))
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${inputType}.`,
    )
  }
}

circleArea(5)

export {}
