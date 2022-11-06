type Area = 'city' | 'residential' | 'interstate' | 'motorway'

function roadRadar(speed: number, area: Area) {
  const motorwayLimit = 130
  const interstateLimit = 90
  const cityLimit = 50
  const residentialLimit = 20
  let limit = 0
  let status = ''

  switch (area) {
    case 'city':
      limit = cityLimit
      break
    case 'residential':
      limit = residentialLimit
      break
    case 'interstate':
      limit = interstateLimit
      break
    case 'motorway':
      limit = motorwayLimit
      break
  }

  const speeding = speed - limit
  if (speeding <= 0) {
    return `Driving ${speed} km/h in a ${limit} zone`
  }
  if (speeding <= 20) {
    status = 'speeding'
  } else if (speeding >= 20 && speeding <= 40) {
    status = 'excessive speeding'
  } else {
    status = 'reckless driving'
  }
  return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`
}

console.log(roadRadar(200, 'motorway'))

export {}
