interface Coordinates {
  x: number
  y: number
}

type PointDistance = {
  firstPoint: {
    x: number
    y: number
  }
  secondPoint: {
    x: number
    y: number
  }
}

class Point implements Coordinates {
  x: Coordinates['x']
  y: Coordinates['y']

  constructor(x: Coordinates['x'], y: Coordinates['y']) {
    this.x = x
    this.y = y
  }

  static distance(
    firstPoint: PointDistance['firstPoint'],
    secondPoint: PointDistance['secondPoint'],
  ) {
    const deltaX = firstPoint.x - secondPoint.x
    const deltaY = firstPoint.y - secondPoint.y
    return Math.sqrt(deltaX ** 2 + deltaY ** 2)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(9, 8)
console.log(Point.distance(p1, p2))

export {}
