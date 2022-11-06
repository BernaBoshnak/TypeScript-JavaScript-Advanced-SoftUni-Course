type Point = number

function validityChecker(x1: Point, y1: Point, x2: Point, y2: Point) {
  function getResult(x1: Point, y1: Point, x2: Point, y2: Point) {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    return Number.isInteger(distance) ? 'valid' : 'invalid'
  }
  return `{${x1}, ${y1}} to {0, 0} is ${getResult(
    x1,
    y1,
    0,
    0,
  )}\n{${x2}, ${y2}} to {0, 0} is ${getResult(
    x2,
    y2,
    0,
    0,
  )}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1, y1, x2, y2)}`
}

console.log(validityChecker(3, 0, 0, 4))

export {}
