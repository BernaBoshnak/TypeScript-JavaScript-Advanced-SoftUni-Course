interface Circle {
  radius: number
}

class Circle implements Circle {
  radius: Circle['radius']

  constructor(radius: Circle['radius']) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  set diameter(value) {
    this.radius = value / 2
  }

  get area() {
    return this.radius ** 2 * Math.PI
  }
}

const c = new Circle(2)
console.log(`Radius: ${c.radius}`)
console.log(`Diameter: ${c.diameter}`)
console.log(`Area: ${c.area}`)
c.diameter = 1.6
console.log(`Radius: ${c.radius}`)
console.log(`Diameter: ${c.diameter}`)
console.log(`Area: ${c.area}`)

export {}
