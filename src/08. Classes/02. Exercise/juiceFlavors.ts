function juiceFlavors(inputArr: Array<string>) {
  type BottlesData = {
    [juiceName: string]: number
  }

  const bottles: BottlesData = {}

  inputArr.reduce((acc: BottlesData, curr: string) => {
    const [juice, quantity] = curr.split(' => ')

    if (!acc[juice]) {
      acc[juice] = 0
    }
    acc[juice] += Number(quantity)

    if (acc[juice] >= 1000) {
      if (!bottles[juice]) {
        bottles[juice] = 0
      }

      bottles[juice] += Math.floor(acc[juice] / 1000)
      acc[juice] %= 1000
    }

    return acc
  }, {})

  Object.entries(bottles).forEach(([juiceName, juiceQuantity]) => {
    console.log(`${juiceName} => ${juiceQuantity}`)
  })
}

juiceFlavors([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549',
])

export {}
