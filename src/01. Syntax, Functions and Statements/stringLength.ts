type Product = string

function stringLength(a: Product, b: Product, c: Product) {
  const totalLength = a.length + b.length + c.length
  const average = Math.floor(totalLength / 3)

  console.log(`${totalLength}\n${average}`)
}

stringLength('chocolate', 'ice cream', 'cake')

export {}
