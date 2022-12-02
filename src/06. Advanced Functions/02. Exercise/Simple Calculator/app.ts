function calculator() {
  type InitData = {
    selector1: string
    selector2: string
    resultSelector: string
  }

  let firstElement: HTMLInputElement | null
  let secondElement: HTMLInputElement | null
  let resultElement: HTMLInputElement | null

  return {
    init: (
      selector1: InitData['selector1'],
      selector2: InitData['selector2'],
      resultSelector: InitData['resultSelector'],
    ) => {
      firstElement = document.querySelector<HTMLInputElement>(selector1)
      secondElement = document.querySelector<HTMLInputElement>(selector2)
      resultElement = document.querySelector<HTMLInputElement>(resultSelector)
    },

    add: () => {
      if (resultElement) {
        resultElement.value = (
          Number(firstElement?.value) + Number(secondElement?.value)
        ).toString()
      }
    },

    subtract: () => {
      if (resultElement) {
        resultElement.value = (
          Number(firstElement?.value) - Number(secondElement?.value)
        ).toString()
      }
    },
  }
}

const calculate = calculator()
calculate.init('#num1', '#num2', '#result')

export {}
