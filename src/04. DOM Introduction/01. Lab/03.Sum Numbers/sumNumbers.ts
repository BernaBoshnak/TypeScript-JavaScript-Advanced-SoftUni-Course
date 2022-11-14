const btn = document.getElementById('btn') as HTMLButtonElement

btn.addEventListener('click', () => {
  const firstEL = Number(
    (document.getElementById('num1') as HTMLInputElement).value,
  )
  const secondEL = Number(
    (document.getElementById('num2') as HTMLInputElement).value,
  )
  const sum = document.getElementById('sum') as HTMLInputElement

  if (firstEL && secondEL) {
    const result = firstEL + secondEL
    sum.value = result.toString()
  }
})

export {}
