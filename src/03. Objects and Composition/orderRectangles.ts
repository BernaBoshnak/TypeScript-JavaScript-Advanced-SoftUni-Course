type Criteria = {
  width: number
  area: () => number
}

function orderRectangles(input: Array<[number, number]>) {
  const result = input
    .map(([width, height]) => ({
      width,
      height,
      area: () => width * height,
      compareTo(rect: Criteria) {
        const result = rect.area() - this.area()

        return result === 0 ? rect.width - this.width : result
      },
    }))
    .sort((a, b) => a.compareTo(b))

  return result
}

console.log(
  orderRectangles([
    [10, 5],
    [3, 20],
    [5, 12],
  ]),
)

export {}
