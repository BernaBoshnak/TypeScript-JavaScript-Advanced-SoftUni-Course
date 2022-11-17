type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function subtract() {
  const firstNumber = document.getElementById(
    'firstNumber',
  ) as Nullable<HTMLInputElement>

  const secondNumber = document.getElementById(
    'secondNumber',
  ) as Nullable<HTMLInputElement>
  const resultId = document.getElementById('result') as Nullable<HTMLDivElement>

  if (!resultId) {
    return
  }

  const result = Number(firstNumber?.value) - Number(secondNumber?.value)

  resultId.textContent = result.toString()
}

export {}
