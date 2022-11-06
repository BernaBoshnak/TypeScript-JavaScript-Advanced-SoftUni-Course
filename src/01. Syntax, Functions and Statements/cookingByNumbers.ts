type ListOperations = ['chop' | 'dice' | 'spice' | 'bake' | 'fillet']

function cookingByNumbers(input: string[]) {
  let inputNumber = Number(input.shift())
  const operations = input as ListOperations

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case 'chop':
        inputNumber /= 2
        break
      case 'dice':
        inputNumber = Math.sqrt(inputNumber)
        break
      case 'spice':
        inputNumber++
        break
      case 'bake':
        inputNumber *= 3
        break
      case 'fillet':
        inputNumber -= inputNumber * (20 / 100)
        break
    }
    console.log(inputNumber)
  }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])

export {}
