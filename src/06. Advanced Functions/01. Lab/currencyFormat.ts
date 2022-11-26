type Separator = string
type Symboll = string
type SymbolFirst = boolean
type InputValue = number

function createFormatter(
  separator: Separator,
  symbol: Symboll,
  symbolFirst: SymbolFirst,
  formatter: typeof currencyFormatter,
) {
  return (value: InputValue) => formatter(separator, symbol, symbolFirst, value)
}

function currencyFormatter(
  separator: Separator,
  symbol: Symboll,
  symbolFirst: SymbolFirst,
  value: InputValue,
) {
  const result = value.toFixed(2).replace('.', separator)

  return symbolFirst ? `${symbol} ${result}` : `${result} ${symbol}`
}

const dollarFormatter = createFormatter(',', '$', true, currencyFormatter)
console.log(dollarFormatter(5345))
console.log(dollarFormatter(3.1429))
console.log(dollarFormatter(2.709))

export {}
