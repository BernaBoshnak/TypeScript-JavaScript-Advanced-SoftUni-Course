interface Rectangle {
  width: number
  height: number
  color: string
}

class Rectangle implements Rectangle {
  width: Rectangle['width']
  height: Rectangle['height']
  color: Rectangle['color']

  constructor(
    width: Rectangle['width'],
    height: Rectangle['height'],
    color: Rectangle['color'],
  ) {
    this.width = width
    this.height = height
    this.color = color
  }

  calcArea() {
    return this.width * this.height
  }
}

const rect = new Rectangle(4, 5, 'Red')
console.log(rect.width)
console.log(rect.height)
console.log(rect.color)
console.log(rect.calcArea())

export {}
