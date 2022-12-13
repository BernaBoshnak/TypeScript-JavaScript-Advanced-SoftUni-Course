type CarModel = string
type AddCar = {
  model: CarModel
  horsepower: number
  price: number
  mileage: number
}
type SoldCarsData = {
  model: CarModel
  horsepower: AddCar['horsepower']
  soldPrice: number
}

class CarDealership {
  private availableCars: AddCar[]
  private soldCars: SoldCarsData[]
  private totalIncome: number

  constructor(private name: string) {
    this.availableCars = []
    this.soldCars = []
    this.totalIncome = 0
  }

  addCar(model: CarModel, horsepower: number, price: number, mileage: number) {
    if (!model || !horsepower || !price || !mileage) {
      throw new Error('Invalid input!')
    } else {
      this.availableCars.push({ model, horsepower, price, mileage })
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
        2,
      )} km - ${price.toFixed(2)}$`
    }
  }

  sellCar(model: CarModel, desiredMileage: number) {
    const carModel = this.availableCars.find((car) => car.model === model)

    if (!carModel) {
      throw new Error(`${model} was not found!`)
    } else {
      const carIndex = this.availableCars.findIndex(
        (car) => car.model === model,
      )
      const differenceMileage =
        this.availableCars[carIndex].mileage - desiredMileage

      if (this.availableCars[carIndex].mileage <= desiredMileage) {
        this.availableCars[carIndex].price
      } else if (differenceMileage <= 40000) {
        this.availableCars[carIndex].price -=
          this.availableCars[carIndex].price * (5 / 100)
      } else if (differenceMileage >= 40000) {
        this.availableCars[carIndex].price -=
          this.availableCars[carIndex].price * (10 / 100)
      }

      const horsepower = this.availableCars[carIndex].horsepower
      const soldPrice = this.availableCars[carIndex].price

      this.soldCars.push({ model, horsepower, soldPrice })
      this.availableCars.splice(carIndex, 1)
      this.totalIncome += soldPrice

      return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }
  }

  currentCar() {
    if (this.availableCars.length <= 0) {
      return 'There are no available cars'
    }

    let result = `-Available cars:\n`
    this.availableCars.forEach((car) => {
      result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(
        2,
      )} km - ${car.price.toFixed(2)}$\n`
    })

    return result.trim()
  }

  salesReport(criteria: keyof AddCar) {
    interface Sorting {
      [x: string]: (
        a: AddCar | SoldCarsData,
        b: AddCar | SoldCarsData,
      ) => number
    }

    const sorting: Sorting = {
      horsepower: (a, b) => b.horsepower - a.horsepower,
      model: (a, b) => a.model.localeCompare(b.model),
    }

    if (!sorting[criteria]) {
      throw new Error('Invalid criteria!')
    }

    let result = `-${
      this.name
    } has a total income of ${this.totalIncome.toFixed(2)}$\n-${
      this.soldCars.length
    } cars sold:\n`
    this.soldCars.sort(sorting[criteria]).forEach((car) => {
      result += `---${car.model} - ${
        car.horsepower
      } HP - ${car.soldPrice.toFixed(2)}$\n`
    })

    return result.trim()
  }
}

const dealership = new CarDealership('SoftAuto')

dealership.addCar('Toyota Corolla', 100, 3500, 190000)
dealership.addCar('Mercedes C63', 300, 29000, 187000)
dealership.addCar('Audi A3', 120, 4900, 240000)

dealership.sellCar('Toyota Corolla', 230000)
dealership.sellCar('Mercedes C63', 110000)
console.log(dealership.salesReport('horsepower'))

export {}
