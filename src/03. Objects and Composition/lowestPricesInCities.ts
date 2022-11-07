type ProductName = string
type ProductData = {
  townName: string
  productPrice: number
}
type Products = Record<ProductName, ProductData>

function lowestPricesInCities(input: Array<string>) {
  const products: Products = {}

  for (const line of input) {
    const [townName, productName, productPrice] = line.split(' | ')
    const productData: ProductData = {
      townName,
      productPrice: Number(productPrice),
    }

    if (!products[productName]) {
      products[productName] = productData
    } else {
      products[productName] =
        products[productName].productPrice <= productData.productPrice
          ? products[productName]
          : productData
    }
  }

  const result: string[] = []
  for (const product in products) {
    result.push(
      `${product} -> ${products[product].productPrice} (${products[product].townName})`,
    )
  }

  return result.join('\n')
}

console.log(
  lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
  ]),
)

export {}
