type Model = string

const rentCar = {
  searchCar(shop: string[], model: Model) {
    const findModel: string[] = []

    if (Array.isArray(shop) && typeof model == 'string') {
      for (let i = 0; i < shop.length; i++) {
        if (model == shop[i]) {
          findModel.push(shop[i])
        }
      }

      if (findModel.length !== 0) {
        return `There is ${findModel.length} car of model ${model} in the catalog!`
      } else {
        throw new Error('There are no such models in the catalog!')
      }
    } else {
      throw new Error('Invalid input!')
    }
  },
  calculatePriceOfCar(model: Model, days: number) {
    const catalogue: Readonly<Record<string, number>> = {
      Volkswagen: 20,
      Audi: 36,
      Toyota: 40,
      BMW: 45,
      Mercedes: 50,
    }

    if (typeof model == 'string' && Number.isInteger(days)) {
      if (Object.prototype.hasOwnProperty.call(catalogue, model)) {
        const cost = catalogue[model] * days
        return `You choose ${model} and it will cost $${cost}!`
      } else {
        throw new Error('No such model in the catalog!')
      }
    } else {
      throw new Error('Invalid input!')
    }
  },
  checkBudget(costPerDay: number, days: number, budget: number) {
    if (
      !Number.isInteger(costPerDay) ||
      !Number.isInteger(days) ||
      !Number.isInteger(budget)
    ) {
      throw new Error('Invalid input!')
    } else {
      const cost = costPerDay * days

      if (cost <= budget) {
        return `You rent a car!`
      } else {
        return 'You need a bigger budget!'
      }
    }
  },
}

export default rentCar
