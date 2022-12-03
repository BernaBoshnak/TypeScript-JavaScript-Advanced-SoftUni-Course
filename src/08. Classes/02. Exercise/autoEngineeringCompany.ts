type CarBrand = string
type CarData = {
  [carModel: string]: number
}

function autoCompany(array: Array<string>) {
  const cars = array
    .map((line) => line.split(' | '))
    .reduce((storage: Record<CarBrand, CarData>, cars: string[]) => {
      const [brand, model, produced] = cars

      if (!storage[brand]) {
        storage[brand] = {}
      }

      if (!storage[brand][model]) {
        storage[brand][model] = 0
      }

      storage[brand][model] += Number(produced)
      return storage
    }, {})

  const resultString = []
  for (const [brand, model] of Object.entries(cars)) {
    let result = `${brand}\n`

    for (const [carModel, producedCars] of Object.entries(model)) {
      result += `###${carModel} -> ${producedCars}\n`
    }
    resultString.push(result)
  }

  return resultString.join('')
}

console.log(
  autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
  ]),
)

export {}
