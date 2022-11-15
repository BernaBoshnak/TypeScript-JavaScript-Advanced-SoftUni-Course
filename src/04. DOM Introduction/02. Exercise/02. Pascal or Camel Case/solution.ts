const btn = document.getElementById('btn') as HTMLInputElement

btn.addEventListener('click', () => {
  const text = (document.getElementById('text') as HTMLInputElement).value
  const currentText = (
    document.getElementById('naming-convention') as HTMLInputElement
  ).value
  const resultContainer = document.getElementById('result') as HTMLDivElement

  const splitted = text.split(' ')
  let resultString = ''

  if (currentText === 'Camel Case') {
    resultString +=
      splitted[0][0].toLowerCase() +
      splitted[0].slice(1, splitted[0].length).toLowerCase()
    for (let i = 1; i < splitted.length; i++) {
      resultString +=
        splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase()
    }
    resultContainer.textContent = resultString
  } else if (currentText === 'Pascal Case') {
    for (let i = 0; i < splitted.length; i++) {
      resultString +=
        splitted[i][0].toUpperCase() +
        splitted[i].slice(1, splitted[i].length).toLowerCase()
    }
    resultContainer.textContent = resultString
  } else {
    resultContainer.textContent = 'Error!'
  }
})

export {}
