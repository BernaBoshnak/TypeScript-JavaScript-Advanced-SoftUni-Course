// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  type ProductData = {
    productName: string | null
    price: number | null
  }

  type CalculateProducts = {
    list: string[]
    totalPrice: number
  }

  const output = document.querySelector<HTMLTextAreaElement>('.textarea')

  if (!output) {
    return
  }

  const shoppingCard = document.querySelector<HTMLDivElement>('.shopping-cart')
  const btn = document.querySelector<HTMLButtonElement>('.checkout')

  const cart: ProductData[] = []

  shoppingCard?.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.tagName == 'BUTTON' && target.className === 'add-product') {
      const product = target.parentNode?.parentNode

      if (product) {
        const productName =
          product.querySelector<HTMLDivElement>('.product-title')
        const price = product.querySelector<HTMLDivElement>(
          '.product-line-price',
        )

        if (productName && price) {
          const productData: ProductData = {
            productName: productName.textContent,
            price: Number(price.textContent),
          }
          cart.push(productData)

          output.value += `Added ${
            productData.productName
          } for ${productData.price?.toFixed(2)} to the cart.\n`
        }
      }
    }
  })

  btn?.addEventListener('click', () => {
    const result = cart.reduce(
      (acc: CalculateProducts, curr: ProductData) => {
        if (curr.productName && curr.price) {
          acc.list.push(curr.productName)
          acc.totalPrice += curr.price
        }
        return acc
      },
      { list: [], totalPrice: 0 },
    )

    output.value += `You bought ${result.list.join(
      ', ',
    )} for ${result.totalPrice.toFixed(2)}.`
  })
}

export {}
