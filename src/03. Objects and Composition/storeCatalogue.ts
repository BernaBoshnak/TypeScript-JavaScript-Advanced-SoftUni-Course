type FirstLetter = string
type DictionaryData = {
  name: string
  price: number
}
type Dictionary = Record<FirstLetter, DictionaryData[]>

function storeCatalogue(input: Array<string>) {
  const dictionary: Dictionary = {}

  for (const line of input) {
    const [name, price] = line.split(' : ')
    const dictionaryData: DictionaryData = {
      name,
      price: Number(price),
    }
    const firstLetter = name[0]

    if (!dictionary[firstLetter]) {
      dictionary[firstLetter] = [dictionaryData]
    } else {
      dictionary[firstLetter].push(dictionaryData)
    }
  }

  const result: string[] = []
  Object.entries(dictionary)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((entry: [string, DictionaryData[]]) => {
      const values = entry[1]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((product) => `  ${product.name}: ${product.price}`)
        .join('\n')
      result.push(`${entry[0]}\n${values}`)
    })

  return result.join('\n')
}

console.log(
  storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
  ]),
)

export {}
