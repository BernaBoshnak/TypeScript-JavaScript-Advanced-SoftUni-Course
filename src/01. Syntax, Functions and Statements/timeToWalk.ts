type Argument = number

function timeToWalk(steps: Argument, footprint: Argument, speedKmh: Argument) {
  const kilometerToMeter = 1000
  const hourToSec = 3600
  const restsOnEveryMeters = 500
  const hourToMin = 60

  const speed = (speedKmh * kilometerToMeter) / hourToSec
  const distance = steps * footprint

  const rest = Math.floor(distance / restsOnEveryMeters) * hourToMin
  const time = distance / speed + rest

  const hours = Math.floor(time / hourToSec)
    .toFixed(0)
    .padStart(2, '0')
  const minutes = Math.floor((time - Number(hours) * hourToSec) / hourToMin)
    .toFixed(0)
    .padStart(2, '0')
  const seconds = (
    time -
    Number(hours) * hourToSec -
    Number(minutes) * hourToMin
  )
    .toFixed(0)
    .padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

console.log(timeToWalk(4000, 0.6, 5))

export {}
