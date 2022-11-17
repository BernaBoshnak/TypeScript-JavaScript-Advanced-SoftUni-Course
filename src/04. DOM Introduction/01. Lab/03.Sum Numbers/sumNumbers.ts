type Nullable<T> = T | null

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function calc() {
  const firstEL = document.getElementById('num1') as Nullable<HTMLInputElement>
  const secondEL = document.getElementById('num2') as Nullable<HTMLInputElement>
  const sum = document.getElementById('sum') as Nullable<HTMLInputElement>

  if (!firstEL || !secondEL || !sum) {
    return
  }

  const result = Number(firstEL.value) + Number(secondEL.value)
  sum.value = result.toString()
}

export {}
