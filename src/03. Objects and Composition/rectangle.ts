interface RectangleData {
  width: number
  height: number
  color: string
  calcArea: () => number
}

function rectangle(width: number, height: number, color: string) {
  function capitalize(word: string) {
    return word[0].toUpperCase() + word.slice(1)
  }

  const rectangleData: RectangleData = {
    width,
    height,
    color: capitalize(color),
    calcArea(this: RectangleData) {
      return this.width * this.height
    },
  }

  return rectangleData
}

const rect = rectangle(4, 5, 'red')

console.log(rect.width)
console.log(rect.height)
console.log(rect.color)
console.log(rect.calcArea())

export {}
