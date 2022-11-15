const firstNumber = Number(
  (document.getElementById('firstNumber') as HTMLInputElement).value,
)
const secondNumber = Number(
  (document.getElementById('secondNumber') as HTMLInputElement).value,
)
const resultId = document.getElementById('result') as HTMLDivElement

const result = firstNumber - secondNumber

resultId.textContent = result.toString()

export {}
