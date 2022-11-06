function circleArea(radius: string | number) {
  const inputType = typeof radius

  if (inputType === 'number') {
    const area = Number(radius) ** 2 * Math.PI
    console.log(area.toFixed(2))
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${inputType}.`,
    )
  }
}

circleArea(5)

export {}
