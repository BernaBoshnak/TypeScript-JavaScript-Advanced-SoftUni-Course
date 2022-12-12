type OldCarModel = string
type NewCarPrice = number
type DiscountForOldCar = Record<OldCarModel, NewCarPrice>
type ExtrasArr = string[]
type IndexArr = number[]

const dealership = {
  newCarCost: function (oldCarModel: OldCarModel, newCarPrice: NewCarPrice) {
    const discountForOldCar: DiscountForOldCar = {
      'Audi A4 B8': 15000,
      'Audi A6 4K': 20000,
      'Audi A8 D5': 25000,
      'Audi TT 8J': 14000,
    }

    if (Object.prototype.hasOwnProperty.call(discountForOldCar, oldCarModel)) {
      const discount = discountForOldCar[oldCarModel]
      const finalPrice = newCarPrice - discount
      return finalPrice
    } else {
      return newCarPrice
    }
  },

  carEquipment: function (extrasArr: ExtrasArr, indexArr: IndexArr) {
    const selectedExtras: ExtrasArr = []

    indexArr.forEach((i) => {
      selectedExtras.push(extrasArr[i])
    })

    return selectedExtras
  },

  euroCategory: function (category: number) {
    if (category >= 4) {
      const price = this.newCarCost('Audi A4 B8', 30000)
      const total = price - price * 0.05
      return `We have added 5% discount to the final price: ${total}.`
    } else {
      return 'Your euro category is low, so there is no discount from the final price!'
    }
  },
}

export default dealership
