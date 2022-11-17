type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solve() {
  const text = document.getElementById('text') as Nullable<HTMLInputElement>
  const namingConvention = document.getElementById(
    'naming-convention',
  ) as Nullable<HTMLInputElement>

  const resultContainer = document.getElementById(
    'result',
  ) as Nullable<HTMLDivElement>

  if (text && namingConvention && resultContainer) {
    const splitted = text.value.split(' ')
    let resultString = ''

    if (namingConvention.value === 'Camel Case') {
      resultString +=
        splitted[0][0].toLowerCase() +
        splitted[0].slice(1, splitted[0].length).toLowerCase()
      for (let i = 1; i < splitted.length; i++) {
        resultString +=
          splitted[i][0].toUpperCase() +
          splitted[i].slice(1, splitted[i].length).toLowerCase()
      }
      resultContainer.textContent = resultString
    } else if (namingConvention.value === 'Pascal Case') {
      for (let i = 0; i < splitted.length; i++) {
        resultString +=
          splitted[i][0].toUpperCase() +
          splitted[i].slice(1, splitted[i].length).toLowerCase()
      }
      resultContainer.textContent = resultString
    } else {
      resultContainer.textContent = 'Error!'
    }
  }
}

export {}
