interface Area {
  x: string | number
  y: string | number
}

interface Volume extends Area {
  z: string | number
}

type Data = Volume

function area(this: Area) {
  return Math.abs(Number(this.x) * Number(this.y))
}

function volume(this: Volume) {
  return Math.abs(Number(this.x) * Number(this.y) * Number(this.z))
}

function solve(
  areaFn: (this: Area) => number,
  volumeFn: (this: Volume) => number,
  input: string,
) {
  const figures = JSON.parse(input) as Data[]

  const result = figures.map((figure) => ({
    area: Math.abs(areaFn.call(figure)),
    volume: Math.abs(volumeFn.call(figure)),
  }))

  return result
}

const example = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`

console.log(solve(area, volume, example))

export {}
