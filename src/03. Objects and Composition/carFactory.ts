interface CarInfo {
  model: string
  power: number
  color: string
  carriage: string
  wheelsize: number
}
type Engines = {
  power: number
  volume: number
}

function carFactory(car: CarInfo) {
  function getEngine(power: number) {
    const engines: Engines[] = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ]
    return engines.find((el) => el.power >= power)
  }

  function getCarriage(carriage: string, color: string) {
    return {
      type: carriage,
      color,
    }
  }

  function getWheels(wheelsize: number) {
    const wheel =
      Math.floor(wheelsize) % 2 === 0
        ? Math.floor(wheelsize) - 1
        : Math.floor(wheelsize)

    return Array(4).fill(wheel, 0, 4)
  }

  return {
    model: car.model,
    engine: getEngine(car.power),
    carriage: getCarriage(car.carriage, car.color),
    wheels: getWheels(car.wheelsize),
  }
}

console.log(
  carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
  }),
)

export {}
