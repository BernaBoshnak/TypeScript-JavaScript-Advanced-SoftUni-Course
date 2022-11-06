type Fruit = string
type Weight = number
type Price = number

function fruit(fruit: Fruit, weight: Weight, price: Price) {
  const weightKg = weight / 1000
  const totalPrice = weightKg * price

  return `I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(
    2,
  )} kilograms ${fruit}.`
}

console.log(fruit('orange', 2500, 1.8))

// export {}
