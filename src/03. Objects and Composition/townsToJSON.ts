function townsToJSON(input: Array<string>) {
  const convertToNum = (x: string, digits: number) =>
    isNaN(Number(x)) ? null : Number(Number(x).toFixed(digits))

  function splitLine(input: string) {
    return input
      .split('|')
      .filter(Boolean)
      .map((str) => str.trim())
      .map((str) => convertToNum(str, 2) ?? str)
  }

  const [columns, ...table] = input.map(splitLine)

  return JSON.stringify(
    table.map((entry) => {
      return columns.reduce(
        (
          acc: { [key: string]: string | number },
          curr: string | number,
          i: number,
        ) => {
          acc[curr] = entry[i]

          return acc
        },
        {},
      )
    }),
  )
}

console.log(
  townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |',
  ]),
)

export {}
